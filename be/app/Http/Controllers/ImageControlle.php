<?php

namespace App\Http\Controllers;

use App\Models\Company;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;

class ImageControlle extends Controller
{
    //
    public function imageUpload(Request $request)
    {
        try {
            $user = null;
            if ($request->role === null) {
                throw new Exception('role not provided');
            }
            if ($request->role === 'user') {
                $user = User::find($request->id);
            } else {
                $user = Company::find($request->id);
            }
            if ($user) {
                if ($user->image) {
                    $path = public_path(Str::substr($user->image, strpos($user->image, 'images/')));
                    if (File::exists($path)) {
                        File::delete($path);
                    }
                }
                $image = $request->file('image');
                $imageName = time().$image->getClientOriginalName();
                $image->move(public_path('images/'), $imageName);
                $user->update([
                    'image' => asset('images/'.$imageName),
                ]);

                return response()->json([
                    'success' => 1,
                    'message' => 'image uploaded',
                    'data' => asset('images/'.$imageName),
                ]);
            } else {
                return response()->json([
                    'success' => 0,
                    'message' => 'failed to load image',
                ]);
            }
        } catch (Exception $err) {
            return response()->json([
                'success' => 0,
                'message' => $err->getMessage(),
            ]);
        }

    }
}
