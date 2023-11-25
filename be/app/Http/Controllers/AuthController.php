<?php

namespace App\Http\Controllers;

use App\Mail\ChangePassword;
use App\Models\Company;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Mail;

class AuthController extends Controller
{
    //
    public function login(Request $request)
    {
        try {
            $fields = $request->validate([
                'email' => 'email|required',
                'password' => 'required',
            ]);

            $user = null;
            if ($request->role == 'user' || $request->role == 'hr') {
                $user = User::where(DB::raw('BINARY `email`'), $fields['email'])->first();
                if ($user->role != 1 && $request->role === 'hr') {
                    throw new Exception('not your role');
                }
                if ($user->role != 0 && $request->role === 'user') {
                    throw new Exception('not your role');
                }
            } elseif ($request->role == 'company') {
                $user = Company::where(DB::raw('BINARY `email`'), $fields['email'])->first();
            }

            if (! $user->activationToken->active) {
                throw new Exception('not activated');
            }

            if (! $user || $fields['password'] !== $user->password) {
                return response()->json([
                    'success' => 0,
                    'message' => 'Incorrect email or password',
                    'status' => 400,
                ]);
            }
            $user->tokens()->delete();
            $token = $user->createToken($request->email, ['role-'.$request->role])->plainTextToken;

            //dd($token);
            return response()->json([
                'success' => 1,
                'data' => [
                    'user' => $user,
                    'accessToken' => $token,
                ],
                'message' => 'login succeeded',
            ]);
        } catch (Exception $error) {
            return response()->json([
                'success' => 0,
                'message' => $error->getMessage(),
                'error' => $error,
            ]);
        }
    }

    public function logout(Request $request)
    {
        $user = $request->user();
        //dd($user);
        if (! $user) {
            return response()->json([
                'message' => 'User not found',
                'success' => 0,
            ]);
        }

        $user->tokens()->delete();

        return response()->json([
            'success' => 1,
            'message' => 'Logout Successfully',
        ]);
    }

    public function renewPass(Request $request)
    {
        try {
            $fields = $request->validate([
                'email' => 'email|required',
                'newpassword' => 'required',
                'checknewpassword' => 'required',
            ]);

            $user = null;

            if ($request->newpassword != $request->checknewpassword) {
                throw new Exception('new password not match');
            }

            if ($request->role == 'user' || $request->role == 'hr') {
                $user = User::where(DB::raw('BINARY `email`'), $fields['email'])->first();

            } elseif ($request->role == 'company') {
                $user = Company::where(DB::raw('BINARY `email`'), $fields['email'])->first();
            }

            //dd($user);

            if (! $user) {
                return response()->json([
                    'message' => 'user not found',
                    'success' => 0,
                ]);
            }

            $user->tokens()->delete();

            $user->update([
                'password' => $request->newpassword,
            ]);

            $token = hash_hmac('sha256', Str::random(40), config('app.key'));

            $user->activationToken->update([
                'token' => $token,
                'valid' => true,
                'active' => false,
            ]);

            $user['token'] = $token;

            Mail::to($user->email)->send(new ChangePassword($user));

            return response()->json([
                'success' => 1,
                'message' => 'check your mail to verify new password',
            ]);
        } catch (Exception $err) {
            return response()->json([
                'success' => 0,
                'message' => $err->getMessage(),
                'error' => $err,
            ]);
        }
    }

    public function changePass(Request $request)
    {
        try {
            $fields = $request->validate([
                'email' => 'email|required',
                'password' => 'required',
                'newpassword' => 'required',
                'checknewpassword' => 'required',
            ]);

            $user = null;

            if ($request->newpassword != $request->checknewpassword) {
                throw new Exception('new password not match');
            }

            if ($request->role == 'user' || $request->role == 'hr') {
                $user = User::where(DB::raw('BINARY `email`'), $fields['email'])->first();

            } elseif ($request->role == 'company') {
                $user = Company::where(DB::raw('BINARY `email`'), $fields['email'])->first();
            }

            //dd($user);

            if (! $user) {
                return response()->json([
                    'message' => 'user not found',
                    'success' => 0,
                ]);
            }

            if ($user->password !== $request->password) {
                return response()->json([
                    'message' => 'password not true',
                    'success' => 0,
                ]);
            }

            $user->tokens()->delete();

            $user->update([
                'password' => $request->newpassword,
            ]);

            return response()->json([
                'success' => 1,
                'message' => 'password has changed',
            ]);
        } catch (Exception $err) {
            return response()->json([
                'success' => 0,
                'message' => 'Error in change password',
                'error' => $err,
            ]);
        }
    }
}
