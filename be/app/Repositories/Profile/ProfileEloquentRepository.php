<?php

namespace App\Repositories\Profile;

use App\Models\EXPdetail;
use App\Models\Project;
use App\Repositories\EloquentRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;

class ProfileEloquentRepository extends EloquentRepository implements ProfileRepositoryInterface
{
    /**
     * get model
     *
     * @return string
     */
    public function getModel()
    {
        return \App\Models\Profile::class;
    }

    public function info($applier_id)
    {
        $data = $this->_model->with([
            'projects',
            'expDetail',
            'skills',
            'workablePlaces',
            'address',
            'expYear',
            'category',
            'level'])
            ->where('applier_id', $applier_id)->first();

        return $data;
    }

    public function updateProfile(Request $request)
    {
        $profile = $this->_model->where('applier_id', $request->user()->id)->first();
        $projectIds = Arr::pluck($profile->projects, 'id');
        $expDetailIds = Arr::pluck($profile->expDetail, 'id');
        $newProjects = $request->projects;
        $newExpDetail = $request->expDetail;

        $deleteProjects =
            array_filter($projectIds, function ($id) use ($newProjects) {
                return ! in_array($id, Arr::pluck($newProjects, 'id'));
            });

        $deleteExpDetail =
            array_filter($expDetailIds, function ($id) use ($newExpDetail) {
                return ! in_array($id, Arr::pluck($newExpDetail, 'id'));
            });

        $tempt = Arr::except($request->all(), ['projects', 'expDetail', 'workablePlaces', 'skills']);
        $data = $profile->update($tempt);

        if ($data) {
            if ($newExpDetail) {
                foreach ($newExpDetail as &$item) {
                    $item['profile_id'] = $profile->id;
                }
                EXPdetail::query()->upsert($newExpDetail, ['id'], ['profile_id', 'place', 'content']);
            }
            if ($newProjects) {
                foreach ($newProjects as &$item) {
                    $item['profile_id'] = $profile->id;
                }
                Project::query()->upsert($newProjects, ['id'], ['profile_id', 'amount_of_member', 'start', 'end', 'technology', 'description']);
            }

            EXPdetail::destroy($deleteExpDetail);
            Project::destroy($deleteProjects);

            $profile->workablePlaces()->sync($request->workablePlaces);
            $profile->skills()->sync($request->skills);

            return $data;
        } else {
            return null;
        }
    }

    public function createProfile(Request $request)
    {
        $tempt = Arr::except($request->all(), ['projects', 'expDetail', 'workablePlaces', 'skills']);
        $user = $request->user();
        //dd($user->id);
        if (! $user) {
            return null;
        } else {
            //dd($tempt["applier_id"]);
            $tempt['email'] = $user->email;
            $tempt['gender'] = (int) $user->gender + 2;
            $tempt['fullname'] = $user->fullname;
            $tempt['birth_year'] = $user->birth_year;
            $tempt['applier_id'] = $user->id;
            //dd($tempt);
            $data = $this->_model->create($tempt);
            if ($data) {
                $expDetail = $request->expDetail;
                $projects = $request->projects;
                if ($expDetail) {
                    foreach ($expDetail as &$item) {
                        $item['profile_id'] = $data->id;
                    }
                    //dd($data);
                    //dd($request->expDetail);
                    EXPdetail::insert($expDetail);
                }
                if ($projects) {
                    foreach ($projects as &$item) {
                        $item['profile_id'] = $data->id;
                    }
                    Project::insert($projects);
                }
                if ($request->workablePlaces) {
                    $data->workablePlaces()->attach($request->workablePlaces);
                }
                if ($request->skills) {
                    $data->skills()->attach($request->skills);
                }

                return $data;
            } else {
                return null;
            }
        }
    }
}
