<?php

namespace App\Repositories\User;

use App\Repositories\EloquentRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
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

    public function createUser(Request $request)
    {
        $temp = Arr::except($request->all(), ['image']);
        if ($request->file('image')) {
            $image = $request->file('image');
            $imageName = time().$image->getClientOriginalName();
            $image->move(public_path('images/'), $imageName);
            $temp['image'] = asset('images/'.$imageName);
        }
        $data = $this->_model->create($temp);

        return $data;
    }

    public function applyTask($applier_id, $task_id)
    {
        $user = $this->_model->find($applier_id);
        $data = $user->appliedTasks()->sync($task_id);

        return $data;
    }

    public function saveTask($applier_id, $task_id)
    {
        $user = $this->_model->find($applier_id);
        $data = $user->savedTasks()->sync($task_id);

        return $data;
    }

    public function applierInfo($id)
    {
        $data = $this->_model->with(['birthYear', 'profile' => [
            'category', 'projects', 'expDetail', 'address', 'expYear', 'level', 'skills', 'workablePlaces']])->find($id);
        $data['appliedTasks'] = $data->appliedTasks()->with(['category', 'expYear', 'types', 'address'])
            ->orderBy('created_at', 'DESC')->paginate(10);
        $data['savedTasks'] = $data->savedTasks()->with(['category', 'expYear', 'types', 'address'])
            ->orderBy('created_at', 'DESC')->paginate(10);

        return $data;
    }

    public function hrInfo($id)
    {
        $data = $this->_model->with([
            'birthYear', 'managedBy' => ['address'],
        ])->find($id);
        //dd(get_class($data->managedTasks()));
        $data['managedTasks'] = $data->managedTasks()->with(['category', 'expYear', 'types', 'address'])
            ->orderBy('created_at', 'DESC')->paginate(10);

        return $data;
    }

    public function editUser(Request $request)
    {
        $user = $this->_model->find($request->id);
        if ($user) {
            $temp = Arr::except($request->all(), ['image']);
            if ($request->file('image') && Str::contains($request->file('image')->getClientOriginalName(), $user->image)) {
                $image = $request->file('image');
                $imageName = time().$image->getClientOriginalName();
                $image->move(public_path('images/'), $imageName);
                $temp['image'] = asset('images/'.$imageName);
            }
            $data = $this->_model->update($temp);

            return $data;
        } else {
            return null;
        }
    }
}
