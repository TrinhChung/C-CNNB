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

    public function applyTask(Request $request);

    public function saveTask(Request $request);

    public function applierInfo(string $id);

    public function appliedTasks(Request $request);

    public function savedTasks(Request $request);

    public function hrInfo(string $id);

    public function editUser(Request $request);

    public function newAppliers(string $hr_id);

    public function hrTasks(string $id);

    public function search(Request $request);

    public function searchHr(Request $request);

    public function getFooterData(Request $request);
}
