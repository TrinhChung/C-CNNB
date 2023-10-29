<?php

namespace App\Http\Controllers;

use App\Repositories\Category\CategoryRepositoryInterface;
use Exception;

class CategoryController extends Controller
{
    //
    protected $categoryRepository;

    public function __construct(CategoryRepositoryInterface $categoryRepository)
    {
        $this->categoryRepository = $categoryRepository;
    }

    public function index()
    {
        try {
            $data = $this->categoryRepository->getAll();
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
