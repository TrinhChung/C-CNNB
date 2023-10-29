<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Arr;

class ProfileController extends Controller
{
    //
    public function crudPartition(Request $request)
    {
        // ids
        //$oldIds = Arr::pluck($oldData, 'id');
        $newData = json_decode('[{"id":2,"name":"TWO"},{"name":"three"}, {"id":4,"name":"four"}]');
        $newIds = array_filter(Arr::pluck($newData, 'id'), function ($element) {
            return $element;
        });
        dd($newIds);
        /*// groups
        $delete = collect($oldData)
            ->filter(function ($model) use ($newIds) {
                return !in_array($model->id, $newIds);
            });

        $update = collect($newData)
            ->filter(function ($model) use ($oldIds) {
                return property_exists($model, 'id') && in_array($model->id, $oldIds);
            });

        $create = collect($newData)
            ->filter(function ($model) {
                return !property_exists($model, 'id');
            });

        // return
        return compact('delete', 'update', 'create');
        // data
        $oldData = json_decode('[{"id":1,"name":"one"},{"id":2,"name":"two"}]');
        $newData = json_decode('[{"id":2,"name":"TWO"},{"name":"three"}]');

// results
        $results = crudPartition($oldData, $newData);
        print_r($results);

// do something
        $results['create']->each(...);
        */
    }
}
