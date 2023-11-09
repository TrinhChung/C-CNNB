<?php

namespace App\Http\Controllers;

use App\Mail\DemoMail;
use App\Repositories\User\UserRepositoryInterface;
use Exception;
use Illuminate\Http\Request;
use Mail;

class UserController extends Controller
{
    //
    protected $userRepository;

    public function __construct(UserRepositoryInterface $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    public function create(Request $request)
    {
        try {
            $data = $this->userRepository->createUser($request);
            if ($data && ! $data['error']) {
                Mail::to($data->email)->send(new DemoMail($data));
                unset($data['token']);

                return response()->json(
                    [
                        'data' => $data,
                        'message' => 'new user registered',
                        'success' => 1,
                    ], 200
                );
            } elseif ($data['error']) {
                throw new Exception($data['error']);
            } else {
                throw new Exception('failed to create new user');
            }
        } catch (Exception $err) {
            return response()->json(
                [
                    'message' => $err->getMessage(),
                    'success' => 0,
                ]
            );
        }
    }

    public function apply(Request $request)
    {
        try {
            $data = $this->userRepository->applyTask($request);
            //dd($data);
            if ($data && ! array_key_exists('error', $data)) {
                return response()->json(
                    [
                        'data' => $data,
                        'message' => 'applied',
                        'success' => 1,
                    ], 200
                );
            } elseif (array_key_exists('error', $data)) {
                return response()->json(
                    [
                        'message' => $data[
                            'error'
                        ],
                        'success' => 0,
                    ]
                );
            } else {
                throw new Exception('can not apply for task');
            }
        } catch (Exception $err) {
            return response()->json(
                [
                    'message' => $err->getMessage(),
                    'success' => 0,
                ]
            );
        }
    }

    public function save(Request $request)
    {
        try {
            $data = $this->userRepository->saveTask($request);
            //dd($request->task_id);
            if ($data) {
                return response()->json(
                    [
                        'data' => $data,
                        'message' => 'task saved',
                        'success' => 1,
                    ], 200
                );
            } else {
                throw new Exception('can not save for task');
            }
        } catch (Exception $err) {
            return response()->json(
                [
                    'message' => $err->getMessage(),
                    'success' => 0,
                ]
            );
        }
    }

    public function searchApplier(Request $request)
    {
        try {
            $data = $this->userRepository->search($request);
            if ($data) {
                return response()->json(
                    [
                        'data' => $data,
                        'message' => 'applied users',
                        'success' => 1,
                    ], 200
                );
            } else {
                throw new Exception('can not find applier');
            }
        } catch (Exception $err) {
            return response()->json(
                [
                    'message' => $err->getMessage(),
                    'success' => 0,
                ]
            );
        }
    }

    public function infoApplier(Request $request)
    {
        try {
            $data = $this->userRepository->applierInfo($request->id);
            if ($data) {
                return response()->json(
                    [
                        'data' => $data,
                        'message' => 'get info of applier',
                        'success' => 1,
                    ], 200
                );
            } else {
                throw new Exception('user not found');
            }
        } catch (Exception $err) {
            return response()->json(
                [
                    'message' => $err->getMessage(),
                    'success' => 0,
                ]
            );
        }
    }

    public function infoHr(Request $request)
    {
        try {
            $data = $this->userRepository->hrInfo($request->id);
            //dd($request->user());
            if ($data) {
                return response()->json(
                    [
                        'data' => $data,
                        'message' => 'get info of hr',
                        'success' => 1,
                    ], 200
                );
            } else {
                throw new Exception('user not found');
            }
        } catch (Exception $err) {
            return response()->json(
                [
                    'message' => $err->getMessage(),
                    'success' => 0,
                ]
            );
        }
    }

    public function tasks(Request $request)
    {
        try {
            $data = $this->userRepository->hrTasks($request->id);
            //dd($request->user());
            if ($data) {
                return response()->json(
                    [
                        'data' => $data,
                        'message' => 'get tasks of hr',
                        'success' => 1,
                    ], 200
                );
            } else {
                throw new Exception('tasks not found');
            }
        } catch (Exception $err) {
            return response()->json(
                [
                    'message' => $err->getMessage(),
                    'success' => 0,
                ]
            );
        }
    }

    public function applied(Request $request)
    {
        try {
            $data = $this->userRepository->appliedTasks($request);
            //dd($request->user());
            if ($data) {
                return response()->json(
                    [
                        'data' => $data,
                        'message' => 'get applied tasks',
                        'success' => 1,
                    ], 200
                );
            } else {
                throw new Exception('tasks not found');
            }
        } catch (Exception $err) {
            return response()->json(
                [
                    'message' => $err->getMessage(),
                    'success' => 0,
                ]
            );
        }
    }

    public function saved(Request $request)
    {
        try {
            $data = $this->userRepository->savedTasks($request);
            //dd($request->user());
            if ($data) {
                return response()->json(
                    [
                        'data' => $data,
                        'message' => 'get saved tasks',
                        'success' => 1,
                    ], 200
                );
            } else {
                throw new Exception('tasks not found');
            }
        } catch (Exception $err) {
            return response()->json(
                [
                    'message' => $err->getMessage(),
                    'success' => 0,
                ]
            );
        }
    }

    public function update(Request $request)
    {
        try {
            $data = $this->userRepository->editUser($request);
            if ($data) {
                return response()->json(
                    [
                        'data' => $data,
                        'message' => 'user updated',
                        'success' => 1,
                    ], 200
                );
            } else {
                throw new Exception('user not found');
            }
        } catch (Exception $err) {
            return response()->json(
                [
                    'message' => $err->getMessage(),
                    'success' => 0,
                ]
            );
        }
    }
}
