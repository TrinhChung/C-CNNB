<?php

namespace App\Http\Controllers;

use App\Repositories\Skill\SkillRepositoryInterface;
use Exception;

class SkillController extends Controller
{
    //
    protected $skillRepository;

    public function __construct(SkillRepositoryInterface $skillRepository)
    {
        $this->skillRepository = $skillRepository;
    }

    public function index()
    {
        try {
            $data = $this->skillRepository->getAll();
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
