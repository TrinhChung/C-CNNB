<?php

namespace App\Repositories\Task;

use App\Models\Applier_task;
use App\Models\Type_task;
use App\Models\User;
use App\Repositories\EloquentRepository;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Http;

class TaskEloquentRepository extends EloquentRepository implements TaskRepositoryInterface
{
    /**
     * get model
     *
     * @return string
     */
    public function getModel()
    {
        return \App\Models\Task::class;
    }

    public function getDetail(Request $request)
    {
        $task = $this->_model->with('category')
            ->with('expYear')
            ->with('types')
            ->with('company')
            ->with('hr')
            ->with('address')
            ->withCount('appliedBy')
            ->find($request->id);
        if ($request->user()->role == 0) {
            if ($task->appliedBy->contains($request->user()->id)) {
                $task['applied'] = true;
            } else {
                $task['applied'] = false;
            }

            if ($task->savedBy->contains($request->user()->id)) {
                $task['saved'] = true;
            } else {
                $task['saved'] = false;
            }

            $task['passInfo'] = Applier_task::where(['task_id' => $request->id, 'applier_id' => $request->user()->id])->first();

            unset($task['appliedBy']);
            unset($task['savedBy']);
        }

        //dd($request->user()->role)
        return $task;

    }

    public function getApplier(Request $request)
    {
        $appliers = $this->_model->find($request->id)->appliedBy()->with(['birthYear', 'profile' => ['address', 'expYear', 'category']])->orderBy('applier_task.created_at', 'DESC')->paginate(10);
        if ($appliers) {
            return $appliers;
        } else {
            return null;
        }
    }

    public function search(Request $request)
    {
        $input = '';
        if ($request->searchInput) {
            $input = $request->searchInput;
        }
        //dd($input);
        $data = $this->_model->where('title', 'like', '%'.$input.'%');
        //dd($data);
        if ($request->hr_id) {
            $data = $data->where('hr_id', $request->hr_id);
        }
        if ($request->category_id) {
            $data = $data->where('category_id', $request->category_id);
        }
        if ($request->address_id) {
            $data = $data->where('address_id', $request->address_id);
        }
        if ($request->company_id) {
            $data = $data->where('company_id', $request->company_id);
        }
        if ($request->status) {
            $data = $data->where('status', $request->status);
        }
        if ($request->_salary) {
            $data = $data->where(
                function ($query) use ($request) {
                    $query->where([
                        ['salary_min', '>=', (int) $request->_salary],
                    ])->orWhere(function ($query) {
                        $query->whereNull('salary_min')->whereNull('salary_max');
                    });
                });
        }

        //dd($data);
        return $data->with('category')
            ->with('expYear')
            ->with('types')
            ->with('company')
            ->with('address')->orderBy('created_at', 'DESC')->paginate(10);
    }

    public function createTask(Request $request)
    {
        $temp = Arr::except($request->all(), ['types']);
        if (! Carbon::createFromFormat('Y-m-d', $temp['end'])->gte(Carbon::createFromFormat('Y-m-d', $temp['start']))) {
            throw new Exception('time not valid');
        }
        //dd(Carbon::createFromFormat('Y-m-d', $temp["end"]));
        $data = $this->_model->create($temp);
        foreach ($request->types as $type) {
            Type_task::create([
                'task_id' => $data->id,
                'type_id' => $type,
            ]);
        }

        return $data;
    }

    public function paginateTasks()
    {
        //dd(get_class($this->_model));
        return $this->_model->with('address')->with('types')->with('company')->with('hr')->orderBy('created_at', 'DESC')->paginate(10);
    }

    public function editTask(Request $request)
    {
        if (! Carbon::createFromFormat('Y-m-d', $request->end)->gte(Carbon::createFromFormat('Y-m-d', $request->start))) {
            throw new Exception('time not valid');
        }
        $task = $this->_model->find($request->id);
        $temp = Arr::except($request->all(), ['types']);
        $task->types()->sync($request->types);

        return $task->update($temp);
    }

    public function closeTask(Request $request)
    {
        $task = $this->_model->find($request->id);
        if ($request->user()->id != $task->hr_id) {
            throw new Exception('not your task');
        }
        $checkProfiles = Applier_task::where('task_id', $task->id)->where('fail', -1)->exists();
        if ($checkProfiles) {
            throw new Exception('All profiles must be checked');
        }
        $task->update(['status' => 0]);

        return true;
    }

    public function recommendedTasks(Request $request)
    {
        $user = $request->user()->load('profile');
        $data = $this->_model
            ->with('category')
            ->with('expYear')
            ->with('types')
            ->with('company')
            ->with('address')
            ->orderBy('created_at', 'DESC')
            ->limit(6)
            ->get();
        if ($user->profile && $user->profile->category_id && $user->profile->address_id && $user->profile->year_of_experience) {
            $selected_jobs = $this->_model->where('category_id', $user->profile->category_id)->limit(5)->get();
            if (count($selected_jobs) > 0) {
                $ratings = [];
                foreach ($selected_jobs as $job) {
                    $score = 1;
                    if ($job->category_id === $user->profile->category_id) {
                        $score += 1;
                    }
                    if ($job->gender === -1 || $job->gender === $user->profile->gender) {
                        $score += 1;
                    }
                    if (in_array($job->address_id, $user->profile->workablePlaces->pluck('id')->toArray())) {
                        $score += 1;
                    }
                    if ($job->year_of_experience <= $user->profile->year_of_experience) {
                        $score += 1;
                    }
                    $ratings[] = [$score];
                }
                $items = $selected_jobs->pluck('id')->toArray();
                $jobs_id = Http::post('https://job_recommend.bachnguyencoder.id.vn/api/predict', ['items' => $items, 'ratings' => $ratings, 'category_id' => $user->profile->category_id])['data'];
                if ($jobs_id !== []) {
                    $data = $this->_model->whereIn('id', $jobs_id)
                        ->with('category')
                        ->with('expYear')
                        ->with('types')
                        ->with('company')
                        ->with('address')
                        ->orderBy('created_at', 'DESC')->get();
                }
            }
        }

        return $data;
    }

    public function acceptApplier(Request $request)
    {
        $data = Applier_task::where('applier_id', $request->applier_id)->whereIn('task_id', $request->task_id);
        if ($data->update([
            'fail' => 2,
        ])) {
            return true;
        } else {
            return false;
        }
    }

    public function rejectApplier(Request $request)
    {
        $data = Applier_task::where('applier_id', $request->applier_id)->whereIn('task_id', $request->task_id);
        if ($data->update([
            'fail' => 3,
        ])) {
            return true;
        } else {
            return false;
        }
    }
}
