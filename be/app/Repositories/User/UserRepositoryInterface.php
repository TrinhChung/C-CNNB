<?php

namespace App\Repositories\User;

use Illuminate\Http\Request;

interface UserRepositoryInterface
{
    /**
     * Get all works with Category
     *
     * @return mixed
     */
    //public function getJobs(Request $request);

    public function createUser(Request $request);

    //public function createProfile(Request $request);

    public function applyTask(string $applier_id, string $task_id);

    public function saveTask(string $applier_id, string $task_id);

    public function applierInfo(string $id);

    public function hrInfo(string $id);

    public function editUser(Request $request);
}
