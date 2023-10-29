<?php

namespace App\Repositories\Category;

use App\Repositories\EloquentRepository;
use Illuminate\Http\Request;

class CategoryEloquentRepository extends EloquentRepository implements CategoryRepositoryInterface
{
    /**
     * get model
     *
     * @return string
     */
    public function getModel()
    {
        return \App\Models\Category::class;
    }

    /**
     * Get 5 posts hot in a month the last
     *
     * @return mixed
     */
    /*public function getJobs(Request $request)
    {
        $Category = $this->_model->find($request->id);
        if($Category) {
            return $Category->tasks;
        } else {
            return [];
        }
    }*/

}
