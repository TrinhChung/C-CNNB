<?php

namespace App\Repositories\Skill;

use App\Repositories\EloquentRepository;
use Illuminate\Http\Request;

class SkillEloquentRepository extends EloquentRepository implements SkillRepositoryInterface
{
    /**
     * get model
     *
     * @return string
     */
    public function getModel()
    {
        return \App\Models\Skill::class;
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
