<?php

namespace App\Repositories\Address;

use App\Repositories\EloquentRepository;
use Illuminate\Http\Request;

class AddressEloquentRepository extends EloquentRepository implements AddressRepositoryInterface
{
    /**
     * get model
     *
     * @return string
     */
    public function getModel()
    {
        return \App\Models\Address::class;
    }

    /**
     * Get 5 posts hot in a month the last
     *
     * @return mixed
     */
    public function getJobs(Request $request)
    {
        $address = $this->_model->with('tasks')->find($request->id);
        if ($address) {
            return $address;
        } else {
            return [];
        }
    }
}
