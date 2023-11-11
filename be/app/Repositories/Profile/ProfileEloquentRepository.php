<?php

namespace App\Repositories\Profile;

use App\Models\EXPdetail;
use App\Models\Project;
use App\Models\Task;
use App\Models\User;
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

    public function info($request)
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
            ->where('applier_id', $request->id)->first();
        if ($request->user()->role == 1) {
            $data['appliedTasks'] = Task::where('hr_id', $request->user()->id)->whereHas('appliedBy', function ($query) use ($request) {
                $query->where('users.id', $request->id);
            })->with('category', 'address')->get();
        }

        return $data;
    }

    public function updateProfile(Request $request)
    {
        $profile = $this->_model->where('applier_id', $request->user()->id)->first();
        $projectIds = Arr::pluck($profile->projects, 'id');
        $expDetailIds = Arr::pluck($profile->expDetail, 'id');
        $newProjects = $request->projects;
        $newExpDetail = $request->exp_detail;
        $deleteProjects = null;
        $deleteExpDetail = null;

        if ($projectIds) {
            $deleteProjects =
            array_filter($projectIds, function ($id) use ($newProjects) {
                return ! in_array($id, Arr::pluck($newProjects, 'id'));
            });
        }
        if ($expDetailIds) {
            $deleteExpDetail =
            array_filter($expDetailIds, function ($id) use ($newExpDetail) {
                return ! in_array($id, Arr::pluck($newExpDetail, 'id'));
            });
        }
        $tempt = Arr::except($request->all(), ['projects', 'exp_detail', 'workable_places', 'skills']);
        if (array_key_exists('gender', $tempt)) {
            $tempt['gender'] += 2;
        }
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

            if ($deleteExpDetail) {
                EXPdetail::destroy($deleteExpDetail);
            }

            if ($deleteProjects) {
                Project::destroy($deleteProjects);
            }

            if ($request->workable_places) {
                $profile->workablePlaces()->sync($request->workable_places);
            }
            if ($request->skills) {
                $profile->skills()->sync($request->skills);
            }
            $user = User::find($profile->applier_id);
            $user->update([
                'birth_year' => $tempt['birth_year'],
                'fullname' => $tempt['fullname'],
                'gender' => (int) $tempt['gender'] + 2,
                'email' => $tempt['email'],
            ]);

            return $profile;
        } else {
            return null;
        }
    }

    public function createProfile(Request $request)
    {
        $tempt = Arr::except($request->all(), ['projects', 'exp_detail', 'workable_places', 'skills']);
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
                $expDetail = $request->exp_detail;
                $projects = $request->projects;
                if ($expDetail) {
                    foreach ($expDetail as &$item) {
                        $item['profile_id'] = $data->id;
                    }
                    //dd($data);
                    //dd($request->exp_detail);
                    EXPdetail::insert($expDetail);
                }
                if ($projects) {
                    foreach ($projects as &$item) {
                        $item['profile_id'] = $data->id;
                    }
                    Project::insert($projects);
                }
                if ($request->workable_places) {
                    $data->workablePlaces()->attach($request->workable_places);
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
