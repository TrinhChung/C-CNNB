<?php

namespace App\Http\Controllers;

use App\Mail\DemoMail;
use App\Repositories\Company\CompanyRepositoryInterface;
use Exception;
use Illuminate\Http\Request;
use Mail;

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
            $data = $this->companyRepository->index();
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
                Mail::to($data->email)->send(new DemoMail($data));
                unset($data['token']);

                return response()->json(
                    [
                        'data' => $data,
                        'message' => 'new company created',
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
            $data = $this->companyRepository->editCompany($request);
            if ($data) {
                return response()->json(
                    [
                        'data' => $data,
                        'message' => 'company updated',
                        'success' => 1,
                    ], 200
                );
            } else {
                throw new Exception('company not found / can not be updated');
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

    public function accept(Request $request)
    {
        try {
            $data = $this->companyRepository->acceptHr($request);
            if ($data) {
                return response()->json(
                    [
                        'message' => $data['message'],
                        'success' => 1,
                    ], 200
                );
            } else {
                throw new Exception('hr not found / can not accept or reject');
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

    public function companySelect()
    {

        try {
            $data = $this->companyRepository->getAll();
            if ($data) {
                return response()->json(
                    [
                        'data' => $data,
                        'message' => 'all company selection',
                        'success' => 1,
                    ]
                );
            } else {
                throw new Exception('no company found');
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

    public function hrs(Request $request)
    {
        try {
            $data = $this->companyRepository->hrOfCompany($request);
            if ($data) {
                return response()->json(
                    [
                        'data' => $data,
                        'message' => 'get hrs of company',
                        'success' => 1,
                    ]
                );
            } else {
                throw new Exception('no hrs found');
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
