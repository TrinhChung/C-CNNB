<?php

namespace App\Repositories\Address;

use Illuminate\Http\Request;

interface AddressRepositoryInterface
{
    /**
     * Get all works with address
     *
     * @return mixed
     */
    public function getJobs(Request $request);
}
