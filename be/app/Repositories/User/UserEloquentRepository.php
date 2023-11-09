<?php

namespace App\Repositories\User;

use App\Models\Activation;
use App\Models\Profile;
use App\Models\Task;
use App\Repositories\EloquentRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
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
        $data = $this->_model->where('fullname', 'like', '%'.$input.'%');
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
            return $data
                ->with(['profile' => ['address', 'birth_year', 'category']])->get();
        } else {
            return null;
        }
    }

    public function createUser(Request $request)
    {
        $check = $this->_model->where(DB::raw('BINARY `email`'), $request->email)->exists();
        if ($check) {
            return ['error' => 'email has been taken'];
        }
        $temp = Arr::except($request->all(), ['image']);
        if ($request->file('image')) {
            $image = $request->file('image');
            $imageName = time().$image->getClientOriginalName();
            $image->move(public_path('images/'), $imageName);
            $temp['image'] = asset('images/'.$imageName);
        }
        if ($request->role == 1) {
            $temp['hraccepted'] = -1;
        }
        $temp['role'] += 1;
        $temp['gender'] = (int) $temp['gender'] + 2;
        $data = $this->_model->create($temp);
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
        $data = $user->appliedTasks;
        if ($data) {
            return $data;
        } else {
            return null;
        }
    }

    public function savedTasks(Request $request)
    {
        $user = $request->user();
        $data = $user->savedTasks;
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
        $data = Task::where('hr_id', $id)->orderBy('created_at', 'DESC')->get();
        if ($data) {
            return $data;
        } else {
            return null;
        }
    }

    public function newAppliers($hr_id)
    {
        $data = DB::select('select users.fullname, addresses.name, applier_task.created_at, categories.content, tasks.title from users join profiles
        on profiles.applier_id = users.id join addresses on profiles.address_id = addresses.id join categories on categories.id = profiles.category_id
        join applier_task on users.id = applier_task.applier_id join tasks on tasks.id = applier_task.task_id where tasks.hr_id = ? group by users.id order by applier_task.created_at DESC', [$hr_id]);

        return $data;
    }

    public function editUser(Request $request)
    {
        $user = $request->user();
        if ($user) {
            $temp = Arr::except($request->all(), ['image']);
            if ($request->file('image') && ! Str::contains($request->file('image')->getClientOriginalName(), $user->image)) {
                $image = $request->file('image');
                $imageName = time().$image->getClientOriginalName();
                $image->move(public_path('images/'), $imageName);
                $temp['image'] = asset('images/'.$imageName);
            }
            if ($request->gender) {
                $temp['gender'] = $request->gender + 2;
            }
            $data = $user->update($temp);
            $profile = Profile::where('applier_id', $user->id)->first();
            if ($user->role == 0) {
                $profile->update([
                    'birth_year' => $temp['birth_year'],
                    'fullname' => $temp['fullname'],
                    'gender' => (int) $temp['gender'] + 2,
                    'email' => $temp['email'],
                ]);
            }

            return $data;
        //dd($data);
        } else {
            return null;
        }
    }
}
