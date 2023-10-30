<?php

namespace App\Http\Controllers;

use App\Models\Activation;
use Illuminate\Http\Request;

class MailController extends Controller
{
    //
    public function active(Request $request)
    {
        $data = Activation::where('token', $request->token)->first();
        if (! $data || ! $data->valid) {
            return response()->json([
                'success' => 0,
                'message' => 'your token is not valid',
            ]);
        } else {
            $data->update([
                'valid' => false,
                'active' => true,
            ]);

            return response()->json([
                'success' => 1,
                'message' => 'account actived',
            ]);
        }
    }
}
