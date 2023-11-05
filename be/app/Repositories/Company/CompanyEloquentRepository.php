<?php

namespace App\Repositories\Company;

use App\Models\Activation;
use App\Models\User;
use App\Repositories\EloquentRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;
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
            ->with('tasks', function ($q) {
                $q->limit(5);
            })
            ->withCount('tasks')
            ->find($request->id);
        //$task->tasks()->limit(2);
        if ($request->role == 0) {
            unset($task['managedHrs']);
        }

        return $task;

    }

    public function search(Request $request)
    {
        $data = $this->_model->where('name', 'like', '%'.$request->searchInput.'%');

        return $data
            ->with('address')
            ->with('tasks')->withCount('tasks')->paginate(10);
    }

    public function index()
    {
        return $this->_model
            ->with('address')
            ->with('tasks')->withCount('tasks')->paginate(10);
    }

    public function createCompany(Request $request)
    {
        $check = $this->_model->where(DB::raw('BINARY `email`'), $request->email)->exists();
        if ($check) {
            if (Http::get('https://api.vietqr.io/v2/business/'.$request->tax_code)['data']) {
                $temp = Arr::except($request->all(), ['image']);
                if ($request->file('image')) {
                    $image = $request->file('image');
                    $imageName = time().$image->getClientOriginalName();
                    $image->move(public_path('images/'), $imageName);
                    $temp['image'] = asset('images/'.$imageName);
                }
                $data = $this->_model->create($temp);
                $token = hash_hmac('sha256', Str::random(40), config('app.key'));
                $data['token'] = $token;
                $data['fullname'] = $data['name'];
                Activation::create([
                    'user_id' => $data->id,
                    'token' => $token,
                ]);

                return $data;
            } else {
                return null;
            }
        } else {
            return null;
        }
    }

    public function editCompany(Request $request)
    {
        $company = $this->_model->find($request->id);
        if ($company) {
            $temp = Arr::except($request->all(), ['image']);
            if ($request->file('image') && ! Str::contains($request->file('image')->getClientOriginalName(), $company->image)) {
                $image = $request->file('image');
                $imageName = time().$image->getClientOriginalName();
                $image->move(public_path('images/'), $imageName);
                $temp['image'] = asset('images/'.$imageName);
            }
            $data = $company->update($temp);

            return $data;
        } else {
            return null;
        }

    }

    public function acceptHr(Request $request)
    {
        $hr = User::find($request->hr_id);
        $company = $this->find($request->company_id);
        if (! $company || ! $hr || ! $hr->company_id === $company->id) {
            return null;
        }
        if ($request->action == 'accept') {
            $data = $hr->update(['hraccepted' => 2]);
            if ($data) {
                return ['message' => 'hr accepted'];
            } else {
                return null;
            }
        } elseif ($request->action == 'reject') {
            $hr->delete();

            return ['message' => 'hr rejected'];
        }
    }
}
