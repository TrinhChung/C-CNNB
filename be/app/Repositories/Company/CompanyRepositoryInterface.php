<?php

namespace App\Repositories\Company;

use Illuminate\Http\Request;

interface CompanyRepositoryInterface
{
    /**
     * Get all works with Category
     *
     * @return mixed
     */
    //public function getJobs(Request $request);

    public function createCompany(Request $request);

    public function getDetail(Request $request);

    public function search(Request $request);

    public function editCompany(Request $request);

    public function acceptHr(Request $request);

    public function index();
}
