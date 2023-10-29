<?php

namespace App\Http\Controllers;

use App\Repositories\Exp\ExpRepositoryInterface;
use Exception;

class ExpController extends Controller
{
    //
    protected $expRepository;

    public function __construct(ExpRepositoryInterface $expRepository)
    {
        $this->expRepository = $expRepository;
    }

    public function index()
    {
        try {
            $data = $this->expRepository->getAll();
            if ($data) {
                return response()->json(
                    [
                        'data' => $data,
                        'message' => 'get all categories',
                        'success' => 1,
                    ], 200
                );
            } else {
                throw new Exception('categories not found');
            }

        } catch (Exception $err) {
            return response()->json([
                'success' => 0,
                'message' => $err->getMessage(),
            ]);
        }
    }
}
