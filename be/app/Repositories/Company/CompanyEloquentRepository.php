<?php

namespace App\Repositories\Company;

use App\Repositories\EloquentRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class CompanyEloquentRepository extends EloquentRepository implements CompanyRepositoryInterface
{
    /**
     * get model
     *
     * @return string
     */
    public function getModel()
    {
        return \App\Models\Company::class;
    }

    public function getDetail(Request $request)
    {
        $task = $this->_model
            ->with('managedHrs')
            ->with('address')
            ->with('tasks')
            ->find($request->id);

        return $task;

    }

    public function search(Request $request)
    {
        $data = $this->_model->where('name', 'like', '%'.$request->searchInput.'%');

        return $data
            ->with('managedHrs')
            ->with('address')
            ->with('tasks')->get();
    }

    public function createCompany(Request $request)
    {
        if (Http::get('https://api.vietqr.io/v2/business/'.$request->taxCode)['data']) {
            $data = $this->_model->create($request->all());

            return $data;
        } else {
            return null;
        }
    }
}
