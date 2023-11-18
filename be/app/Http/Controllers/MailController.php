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
        if (! $data) {
            return response()->json([
                'success' => 0,
                'message' => 'your token not found',
            ]);
        } elseif (! $data->valid) {
            return view('emails.verifyPage');
        } else {
            $data->update([
                'valid' => false,
                'active' => true,
            ]);

            /*return response()->json([
                "success" => 1,
                "message" => "account actived"
            ]);
            */
            return view('emails.verifyPage');
        }
    }
}
