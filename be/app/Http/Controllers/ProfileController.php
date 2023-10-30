<?php

namespace App\Http\Controllers;

use App\Repositories\Profile\ProfileRepositoryInterface;
use Exception;
use Illuminate\Http\Request;

class ProfileController extends Controller
{
    //

    protected $profileRepository;

    public function __construct(ProfileRepositoryInterface $profileRepository)
    {
        $this->profileRepository = $profileRepository;
    }

    public function info(Request $request)
    {
        try {
            $data = $this->profileRepository->info($request->id);
            if ($data) {
                return response()->json(
                    [
                        'data' => $data,
                        'message' => 'get info of profile',
                        'success' => 1,
                    ], 200
                );
            } else {
                throw new Exception('profile not found');
            }
        } catch (Exception $err) {
            return response()->json([
                'success' => 0,
                'message' => $err->getMessage(),
            ]);
        }
    }

    public function update(Request $request)
    {
        try {
            $data = $this->profileRepository->updateProfile($request);
            if ($data) {
                return response()->json(
                    [
                        'data' => $data,
                        'message' => 'profile updated',
                        'success' => 1,
                    ], 200
                );
            } else {
                throw new Exception('profile not found');
            }
        } catch (Exception $err) {
            return response()->json([
                'success' => 0,
                'message' => $err->getMessage(),
            ]);
        }
    }

    public function create(Request $request)
    {
        try {
            $data = $this->profileRepository->createProfile($request);
            if ($data) {
                return response()->json(
                    [
                        'data' => $data,
                        'message' => 'profile created',
                        'success' => 1,
                    ], 200
                );
            } else {
                throw new Exception('profile not found');
            }
        } catch (Exception $err) {
            return response()->json([
                'success' => 0,
                'message' => $err->getMessage(),
            ]);
        }
    }
}
