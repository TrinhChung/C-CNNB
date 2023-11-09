<?php

use App\Http\Controllers\AddressController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\ExpController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SkillController;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\TypeController;
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

Route::middleware('auth:sanctum')->get('/me', function (Request $request) {
    return response()->json([
        'data' => $request->user(),
        'message' => 'return user',
        'success' => 1,
    ]);
});

/*
Route::get('/testAPi', function(Request $request) {
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
 */

Route::prefix('auth')->group(function () {
    Route::post('/login', [AuthController::class, 'login']);
    Route::put('/reset/password', [AuthController::class, 'changePass']);
    Route::middleware('auth:sanctum')->delete('/logout', [AuthController::class, 'logout']);
});

Route::middleware('auth:sanctum')->group(function () {
    Route::prefix('address')->group(function () {
        Route::get('/all', [AddressController::class, 'index']);
        //Route::get('/tasks/{id}', [AddressController::class, 'allJobs']);
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
    Route::prefix('type')->group(function () {
        Route::get('/all', [TypeController::class, 'index']);
    });
});

Route::prefix('task')->group(function () {
    Route::middleware('auth:sanctum')->group(function () {
        Route::get('/all', [TaskController::class, 'index']);
        Route::get('/info/{id}', [TaskController::class, 'info']);
    });
    Route::get('/search', [TaskController::class, 'search']);
    Route::middleware(['auth:sanctum', 'abilities:role-hr'])->post('/new', [TaskController::class, 'create']);
    Route::middleware(['auth:sanctum', 'abilities:role-hr'])->put('/update/{id}', [TaskController::class, 'update']);
    Route::middleware(['auth:sanctum', 'abilities:role-hr'])->delete('/delete/{id}', [TaskController::class, 'delete']);
    Route::middleware(['auth:sanctum', 'abilities:role-user'])->get('/recommend', [TaskController::class, 'recommend']);
    Route::middleware(['auth:sanctum', 'abilities:role-hr'])->put('/accept', [TaslController::class, 'accept']);
    Route::middleware(['auth:sanctum', 'abilities:role-hr'])->put('/reject', [TaslController::class, 'reject']);
});

Route::prefix('company')->group(function () {
    Route::middleware('auth:sanctum')->group(function () {
        Route::get('/all', [CompanyController::class, 'index']);
        Route::get('/info/{id}', [CompanyController::class, 'info']);
        Route::get('/search', [CompanyController::class, 'search']);
    });
    Route::middleware(['auth:sanctum', 'abilities:role-company'])->post('/new', [CompanyController::class, 'create']);
    Route::middleware(['auth:sanctum', 'abilities:role-company'])->put('/update/{id}', [CompanyController::class, 'update']);
    Route::middleware(['auth:sanctum', 'abilities:role-company'])->put('/accept', [CompanyController::class, 'accept']);
    Route::get('/selection', [CompanyController::class, 'companySelect']);
});

Route::prefix('user')->group(function () {
    Route::middleware(['auth:sanctum'])->get('/applier/info/{id}', [UserController::class, 'infoApplier']);
    Route::middleware(['auth:sanctum', 'ability:role-company,role-hr'])->get('/hr/info/{id}', [UserController::class, 'infoHr']);
    Route::middleware(['auth:sanctum', 'ability:role-company,role-hr'])->get('/hr/task/{id}', [UserController::class, 'tasks']);
    Route::post('/new', [UserController::class, 'create']);
    Route::middleware(['auth:sanctum'])->put('/update/{id}', [UserController::class, 'update']);
    Route::middleware(['auth:sanctum', 'abilities:role-user'])->post('/apply/{task_id}', [UserController::class, 'apply']);
    Route::middleware(['auth:sanctum', 'abilities:role-user'])->post('/save/{task_id}', [UserController::class, 'save']);
    Route::middleware(['auth:sanctum', 'abilities:role-user'])->get('/saved', [UserController::class, 'saved']);
    Route::middleware(['auth:sanctum', 'abilities:role-user'])->get('/applied', [UserController::class, 'applied']);
    Route::middleware(['auth:sanctum', 'ability:role-hr,role-company'])->get('/search/applier', [UserController::class, 'searchApplier']);
});

Route::prefix('profile')->group(function () {
    Route::middleware(['auth:sanctum'])->get('/info/{id}', [ProfileController::class, 'info']);
    Route::middleware(['auth:sanctum', 'abilities:role-user'])->post('/create', [ProfileController::class, 'create']);
    Route::middleware(['auth:sanctum', 'abilities:role-user'])->put('/update', [ProfileController::class, 'update']);
});
