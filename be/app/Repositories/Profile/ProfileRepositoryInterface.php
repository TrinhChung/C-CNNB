<?php

namespace App\Repositories\Profile;

use Illuminate\Http\Request;

interface ProfileRepositoryInterface
{
    /**
     * Get all works with Profile
     *
     * @return mixed
     */
    //public function getJobs(Request $request);

    public function updateProfile(Request $request);
}
