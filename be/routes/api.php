<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/testAPi', function (Request $request) {
    return response()->json([
        'success' => true,
        'message' => 'test successfully',
        'data' => ['name' => 'bach', 'age' => 18],
    ]);
});

Route::get('/greeting', function () {
    $data = file_get_contents('../database/jsonData/categories.json');
    $data = json_decode($data);

    return $data[0]->content;
});
