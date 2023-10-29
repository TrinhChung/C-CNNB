<?php

namespace App\Repositories\Company;

use App\Repositories\EloquentRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Str;

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
        if (Http::get('https://api.vietqr.io/v2/business/'.$request->tax_code)['data']) {
            $temp = Arr::except($request->all(), ['image']);
            if ($request->file('image')) {
                $image = $request->file('image');
                $imageName = time().$image->getClientOriginalName();
                $image->move(public_path('images/'), $imageName);
                $temp['image'] = asset('images/'.$imageName);
            }
            $data = $this->_model->create($temp);

            return $data;
        } else {
            return null;
        }
    }

    public function editCompany(Request $request)
    {
        if (Http::get('https://api.vietqr.io/v2/business/'.$request->tax_code)['data']) {
            $company = $this->_model->find($request->id);
            if ($company) {
                $temp = Arr::except($request->all(), ['image']);
                if ($request->file('image') && Str::contains($request->file('image')->getClientOriginalName(), $company->image)) {
                    $image = $request->file('image');
                    $imageName = time().$image->getClientOriginalName();
                    $image->move(public_path('images/'), $imageName);
                    $temp['image'] = asset('images/'.$imageName);
                }
                $data = $this->_model->update($temp);

                return $data;
            } else {
                return null;
            }
        } else {
            return null;
        }
    }
}
