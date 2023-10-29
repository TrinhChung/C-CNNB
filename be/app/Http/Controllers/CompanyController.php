<?php

namespace App\Http\Controllers;

use App\Repositories\Company\CompanyRepositoryInterface;
use Exception;
use Illuminate\Http\Request;

class CompanyController extends Controller
{
    //
    protected $companyRepository;

    public function __construct(CompanyRepositoryInterface $companyRepository)
    {
        $this->companyRepository = $companyRepository;
    }

    public function index()
    {
        try {
            $data = $this->companyRepository->getAllPaginate(10);
            if ($data) {
                return response()->json(
                    [
                        'data' => $data,
                        'message' => 'get all companies',
                        'success' => 1,
                    ], 200
                );
            } else {
                throw new Exception('companies not found');
            }

        } catch (Exception $err) {
            return response()->json([
                'success' => 0,
                'message' => $err->getMessage(),
            ]);
        }
    }

    public function search(Request $request)
    {
        try {
            $data = $this->companyRepository->search($request);
            if ($data) {
                return response()->json(
                    [
                        'data' => $data,
                        'message' => 'searched companies',
                        'success' => 1,
                    ], 200
                );
            } else {
                throw new Exception('no companies for requiment');
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

    public function info(Request $request)
    {
        try {
            $data = $this->companyRepository->getDetail($request);
            if ($data) {
                return response()->json(
                    [
                        'data' => $data,
                        'message' => 'get info of company',
                        'success' => 1,
                    ], 200
                );
            } else {
                throw new Exception('company not found');
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
            $data = $this->companyRepository->createCompany($request);
            if ($data) {
                return response()->json(
                    [
                        'data' => $data,
                        'message' => 'new task created',
                        'success' => 1,
                    ], 200
                );
            } else {
                throw new Exception('your tax code is not valid');
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
            $data = $this->companyRepository->update($request->id, $request->all());
            if ($data) {
                return response()->json(
                    [
                        'data' => $data,
                        'message' => 'task updated',
                        'success' => 1,
                    ], 200
                );
            } else {
                throw new Exception('task not found / can not be updated');
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
