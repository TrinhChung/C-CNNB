<?php

namespace App\Http\Controllers;

use App\Models\Type;
use Exception;

class TypeController extends Controller
{
    //
    public function index()
    {
        try {
            $data = Type::all();
            if ($data) {
                return response()->json(
                    [
                        'data' => $data,
                        'message' => 'get all categories',
                        'success' => 1,
                    ], 200
                );
            } else {
                throw new Exception('categories not found');
            }
        } catch (Exception $err) {
            return response()->json([
                'success' => 0,
                'message' => $err->getMessage(),
            ]);
        }
    }
}
