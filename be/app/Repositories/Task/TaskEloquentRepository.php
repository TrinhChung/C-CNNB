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
            ->with('appliedBy')
            ->with('company')
            ->with('hr')
            ->with('address')->find($request->id);

        return $task;

    }

    public function search(Request $request)
    {
        $data = $this->_model->where('title', 'like', '%'.$request->searchInput.'%');
        if ($request->category_id) {
            $data = $data->where('category_id', $request->category_id);
        }
        if ($request->address_id) {
            $data = $data->where('address_id', $request->address_id);
        }
        if ($request->company_id) {
            $data = $data->where('company_id', $request->company_id);
        }
        if ($request->salary) {
            $data = $data->where([
                ['salary_max', '>=', $request->salary],
                ['salary_min', '<=', $request->salary],
            ]);
        }

        return $data->with('category')
            ->with('expYear')
            ->with('types')
            ->with('appliedBy')
            ->with('company')
            ->with('hr')
            ->with('address')->paginate(10);
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
}
