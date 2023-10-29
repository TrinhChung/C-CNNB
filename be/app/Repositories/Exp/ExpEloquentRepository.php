<?php

namespace App\Repositories\Exp;

use App\Repositories\EloquentRepository;
use Illuminate\Http\Request;

class ExpEloquentRepository extends EloquentRepository implements ExpRepositoryInterface
{
    /**
     * get model
     *
     * @return string
     */
    public function getModel()
    {
        return \App\Models\Exp::class;
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
