<?php

namespace App\Http\Controllers;

use App\Repositories\Address\AddressRepositoryInterface;
use Exception;
use Illuminate\Http\Request;

class AddressController extends Controller
{
    //
    protected $addressRepository;

    public function __construct(AddressRepositoryInterface $addressRepository)
    {
        $this->addressRepository = $addressRepository;
    }

    public function allJobs(Request $request)
    {
        try {
            $data = $this->addressRepository->getJobs($request);
            if ($data) {
                return response()->json(
                    [
                        'data' => $data,
                        'message' => 'get all jobs belongs to address',
                        'success' => 1,
                    ], 200
                );
            } else {
                throw new Exception('jobs not found, maybe null or address not found');
            }

        } catch (Exception $err) {
            return response()->json([
                'success' => 0,
                'message' => $err->getMessage(),
            ]);
        }
    }

    public function index()
    {
        try {
            $data = $this->addressRepository->getAll();
            if ($data) {
                return response()->json(
                    [
                        'data' => $data,
                        'message' => 'get all address',
                        'success' => 1,
                    ], 200
                );
            } else {
                throw new Exception('addresses not found');
            }

        } catch (Exception $err) {
            return response()->json([
                'success' => 0,
                'message' => $err->getMessage(),
            ]);
        }
    }
}
