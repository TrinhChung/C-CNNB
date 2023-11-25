<?php

namespace App\Http\Controllers;

use App\Exports\TaskExport;
use App\Models\User;
use Excel;

class ExcelController extends Controller
{
    //
    public function export()
    {
        $data = User::all();

        //dd($data);

        return Excel::download(new TaskExport, 'tasks.csv');
    }
}
