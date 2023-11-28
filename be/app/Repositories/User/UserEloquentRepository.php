<?php

namespace App\Repositories\User;

use App\Models\Activation;
use App\Models\Applier_task;
use App\Models\Company;
use App\Models\Profile;
use App\Models\Task;
use App\Repositories\EloquentRepository;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class UserEloquentRepository extends EloquentRepository implements UserRepositoryInterface
{
    /**
     * get model
     *
     * @return string
     */
    public function getModel()
    {
        return \App\Models\User::class;
    }

    public function search(Request $request)
    {
        $input = '';
        if ($request->searchInput) {
            $input = $request->searchInput;
        }
        $data = $this->_model->where('role', '0')->where(function ($query) use ($input) {
            $query->where('fullname', 'like', '%'.$input.'%')->orWhere('email', 'like', '%'.$input.'%');
        });
        if ($request->year_of_experience) {
            $data = $data->whereHas('profile', function ($query) use ($request) {
                $query->where('year_of_experience', $request->year_of_experience);
            });
        }
        if ($request->category_id) {
            $data = $data->whereHas('profile', function ($query) use ($request) {
                $query->where('category_id', $request->category_id);
            });
        }
        $data = $data->whereHas('appliedTasks', function ($query) use ($request) {
            $query->where('hr_id', $request->hr_id);
        });
        if ($data) {
            return $data->with('birthYear')
                ->with(['profile' => ['address', 'category', 'expYear', 'level']])->paginate(10);
        } else {
            return null;
        }
    }

    public function searchHr(Request $request)
    {
        $input = '';
        if ($request->searchInput) {
            $input = $request->searchInput;
        }
        $data = $this->_model->where('role', '1')->where('company_id', $request->user()->id)->where(function ($query) use ($input) {
            $query->where('fullname', 'like', '%'.$input.'%')->orWhere('email', 'like', '%'.$input.'%');
        });
        //dd($data->get());
        if ($request->accepted !== null) {
            $data = $data->where('hraccepted', $request->accepted);
        }
        if ($data) {
            return $data->withCount('managedTasks')->with('birthYear')->orderBy('created_at', 'DESC')->paginate(10);
        } else {
            return null;
        }
    }

    public function createUser(Request $request)
    {
        if ($request->password != $request->repassword) {
            throw new Exception('password not match');
        }
        $check = $this->_model->where(DB::raw('BINARY `email`'), $request->email)->exists();
        if ($check) {
            return ['error' => 'email has been taken'];
        }
        $temp = Arr::except($request->all(), ['image']);
        if ($request->role == 1) {
            if (! $request->company_id) {
                throw new Exception('you must choose your company');
            }
            $temp['hraccepted'] = 1;
        }
        if ($request->role !== null) {
            $temp['role'] += 1;
        }
        if ($request->gender !== null) {
            $temp['gender'] = (int) $temp['gender'] + 2;
        }
        $data = $this->_model->create($temp);
        if ($request->role == 0 || $request->role === null) {
            Profile::create([
                'fullname' => $temp['fullname'],
                'email' => $temp['email'],
                'applier_id' => $data->id,
            ]);
        }
        $token = hash_hmac('sha256', Str::random(40), config('app.key'));
        $data['token'] = $token;
        Activation::create([
            'user_id' => $data->id,
            'token' => $token,
        ]);

        return $data;
    }

    public function applyTask(Request $request)
    {
        $task = Task::findOrFail($request->task_id);
        if (! $task) {
            return ['error' => 'task not found'];
        }
        if ($task->end < Carbon::now()) {
            return ['error' => 'This task ended'];
        }
        $user = $request->user();
        if (! $user->profile) {
            return ['error' => 'you need a profile to apply'];
        }
        $data = $user->appliedTasks()->toggle($request->task_id);

        return $data;
    }

    public function saveTask(Request $request)
    {
        $user = $request->user();
        //dd($user->savedTasks);
        $data = $user->savedTasks()->toggle($request->task_id);

        return $data;
    }

    public function applierInfo($id)
    {
        $data = $this->_model->with(['birthYear', 'profile' => [
            'category', 'projects', 'expDetail', 'address', 'expYear', 'level', 'skills', 'workablePlaces']])->find($id);

        return $data;
    }

    public function appliedTasks(Request $request)
    {
        $user = $request->user();
        $data = $user->appliedTasks()->with('company', 'address')->get();
        if ($data) {
            return $data;
        } else {
            return null;
        }
    }

    public function savedTasks(Request $request)
    {
        $user = $request->user();
        $data = $user->savedTasks()->with('company', 'address')->get();
        if ($data) {
            return $data;
        } else {
            return null;
        }
    }

    public function hrInfo($id)
    {
        $data = $this->_model->with([
            'birthYear', 'managedBy' => ['address'],
        ])->find($id);
        //dd(get_class($data->managedTasks()));
        $data['newAppliers'] = $this->newAppliers($id);

        return $data;
    }

    public function hrTasks($id)
    {
        $data = Task::where('hr_id', $id)->orderBy('created_at', 'DESC')->limit(5)->get();
        if ($data) {
            return $data;
        } else {
            return null;
        }
    }

    public function newAppliers($hr_id)
    {
        $data = DB::select('select users.id, users.image, users.fullname, addresses.name as address, applier_task.created_at, categories.content as category, exps.content as exp_year, tasks.title as task from users join profiles
        on profiles.applier_id = users.id join exps on exps.id = profiles.year_of_experience join addresses on profiles.address_id = addresses.id join categories on categories.id = profiles.category_id
        join applier_task on users.id = applier_task.applier_id join tasks on tasks.id = applier_task.task_id where tasks.hr_id = ? group by users.id order by applier_task.created_at DESC limit 3', [$hr_id]);

        return $data;
    }

    public function editUser(Request $request)
    {
        $user = $request->user();
        if ($user) {
            $temp = Arr::except($request->all(), ['image']);
            if ($request->gender !== null) {
                $temp['gender'] = (int) $request->gender + 2;
            }
            $data = $user->update($temp);
            $profile = Profile::where('applier_id', $user->id)->first();
            if ($user->role == 0) {
                $profile->update([
                    'birth_year' => $temp['birth_year'],
                    'fullname' => $temp['fullname'],
                    'gender' => (int) $request->gender + 2,
                    'email' => $temp['email'],
                ]);
            }

            return $data;
        } else {
            return null;
        }
    }

    public function getFooterData(Request $request)
    {
        $userCount = $this->_model->count();
        $taskCount = Task::count();
        $applyCount = Applier_task::count();
        $companyCount = Company::count();

        return [
            'userCount' => $userCount,
            'applyCount' => $applyCount,
            'taskCount' => $taskCount,
            'companyCount' => $companyCount,
        ];
    }
}
