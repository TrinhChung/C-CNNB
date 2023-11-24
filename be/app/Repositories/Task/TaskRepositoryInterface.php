<?php

namespace App\Repositories\Task;

use Illuminate\Http\Request;

interface TaskRepositoryInterface
{
    /**
     * Get all works with Category
     *
     * @return mixed
     */
    //public function getJobs(Request $request);

    public function getDetail(Request $request);

    public function search(Request $request);

    public function createTask(Request $request);

    public function editTask(Request $request);

    public function paginateTasks();

    public function recommendedTasks(Request $request);

    public function acceptApplier(Request $request);

    public function rejectApplier(Request $request);

    public function getApplier(Request $request);

    public function closeTask(Request $request);
}
