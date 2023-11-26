<?php

namespace App\Http\Controllers;

use App\Models\BirthYear;
use Illuminate\Http\Request;

class BirthYearController extends Controller
{
    //
    public function index(Request $request)
    {
        $data = BirthYear::all();

        return response()->json([
            'success' => 1,
            'data' => $data,
            'message' => 'get birth year list successfully',
        ]);
    }
}
