<?php

use App\Http\Controllers\AddressController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SkillController;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\UserController;
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

Route::prefix('address')->group(function () {
    Route::get('/all', [AddressController::class, 'index']);
    Route::get('/jobs/{id}', [AddressController::class, 'allJobs']);
});

Route::prefix('category')->group(function () {
    Route::get('/all', [CategoryController::class, 'index']);
    //Route::get('/jobs/{id}', [AddressController::class, 'allJobs']);
});

Route::prefix('skill')->group(function () {
    Route::get('/all', [SkillController::class, 'index']);
    //Route::get('/jobs/{id}', [AddressController::class, 'allJobs']);
});

Route::prefix('exp')->group(function () {
    Route::get('/all', [ExpController::class, 'index']);
});

Route::prefix('task')->group(function () {
    Route::get('/all', [TaskController::class, 'index']);
    Route::get('/info/{id}', [TaskController::class, 'info']);
    Route::post('/search', [TaskController::class, 'search']);
    Route::post('/new', [TaskController::class, 'create']);
    Route::put('/update/{id}', [TaskController::class, 'update']);
});

Route::prefix('company')->group(function () {
    Route::get('/all', [CompanyController::class, 'index']);
    Route::get('/info/{id}', [CompanyController::class, 'info']);
    Route::post('/search', [CompanyController::class, 'search']);
    Route::post('/new', [CompanyController::class, 'create']);
    Route::put('/update/{id}', [CompanyController::class, 'update']);
});

Route::prefix('user')->group(function () {
    //Route::get('/all', [CompanyController::class, 'index']);
    Route::get('/applier/info/{id}', [UserController::class, 'infoApplier']);
    Route::get('/hr/info/{id}', [UserController::class, 'infoHr']);
    //Route::post('/search', [UserController::class, 'search']);
    Route::post('/new', [UserController::class, 'create']);
    Route::put('/update/{id}', [UserController::class, 'update']);
});

Route::prefix('profile')->group(function () {
    Route::get('/test', [ProfileController::class, 'crudPartition']);
});
