<?php

namespace App\Repositories\Task;

use App\Models\Type_task;
use App\Repositories\EloquentRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;

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
            ->with('appliedBy')
            ->withCount('appliedBy')
            ->find($request->id);
        if ($task->appliedBy->contains($request->user()->id)) {
            $task['applied'] = true;
        }
        //dd($request->user()->role);
        if ($request->user()->role != 1 && $request->user()->role != 2) {
            unset($task['appliedBy']);
        }

        return $task;

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
        $task = $this->_model->find($request->id);
        $temp = Arr::except($request->all(), ['types']);
        $task->types()->sync($request->types);

        return $task->update($temp);
    }

    public function closeTask(Request $request)
    {
        $task = $this->_model->find($request->id);

        return $task->update(['status' => 1]);
    }

    public function recommendedTasks(Request $request)
    {
        //dd($request->user()->profi(le->workablePlaces);
        //dd(Arr::pluck($request->user()->profile->workablePlaces, 'id'));
        if ($request->user()->profile) {
            $data = $this->_model->whereIn('address_id', Arr::pluck($request->user()->profile->workablePlaces, 'id'))->where('category_id', $request->user()->profile->category_id)
                ->with('category')
                ->with('expYear')
                ->with('types')
                ->with('company')
                ->with('address')
                ->orderBy('created_at', 'DESC')
                ->limit(6)
                ->get();
        } else {
            $data = $this->_model
                ->with('category')
                ->with('expYear')
                ->with('types')
                ->with('company')
                ->with('address')
                ->orderBy('created_at', 'DESC')
                ->limit(6)
                ->get();
        }

        return $data;
    }

    public function acceptApplier(Request $request)
    {
        $task = $this->find($request->task_id);
        if ($task->appliedBy()->updateExistingPivot($request->applier_id, ['fail' => 1])) {
            return true;
        } else {
            return false;
        }
    }

    public function rejectApplier(Request $request)
    {
        $task = $this->find($request->task_id);
        if ($task->appliedBy()->updateExistingPivot($request->applier_id, ['fail' => 2])) {
            return true;
        } else {
            return false;
        }
    }
}
