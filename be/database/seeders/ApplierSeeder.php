<?php

namespace Database\Seeders;

use App\Models\EXPdetail;
use App\Models\Profile;
use App\Models\Project;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class ApplierSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public static function run(): void
    {
        //
        $dt = Carbon::now('Asia/Ho_Chi_Minh');
        for ($i = 1; $i <= 10; $i++) {
            $user = User::create(
                [
                    'fullname' => Str::random('10'),
                    'email' => $i.'abcd@gmail.com',
                    'password' => '123123123',
                    'birth_year' => 5,
                    'gender' => 3,
                    'role' => 1,
                ]
            );
            $profile = Profile::create([
                'email' => $user->email,
                'gender' => $user->gender,
                'fullname' => $user->fullname,
                'birth_year' => $user->birth_year,
                'applier_id' => $user->id,
                'level_id' => 2,
                'category_id' => 25,
                'address_id' => 1,
                'year_of_experience' => 3,
                'description' => Str::random(30),
                'desire' => Str::random(30),
            ]);
            Project::insert(
                [
                    [
                        'profile_id' => $profile->id,
                        'amount_of_member' => 1,
                        'start' => $dt->subYear(1)->toDateString(),
                        'end' => $dt->subYear(1)->addMonths(1)->toDateString(),
                        'technology' => Str::random(20),
                        'description' => Str::random(500),
                    ],
                    [
                        'profile_id' => $profile->id,
                        'amount_of_member' => 3,
                        'start' => $dt->subYear(1)->toDateString(),
                        'end' => $dt->subYear(1)->addMonths(3)->toDateString(),
                        'technology' => Str::random(20),
                        'description' => Str::random(500),
                    ],
                ]
            );

            EXPdetail::insert(
                [
                    [
                        'profile_id' => $profile->id,
                        'content' => Str::random(600),
                        'place' => Str::random(20),
                    ],
                    [
                        'profile_id' => $profile->id,
                        'content' => Str::random(600),
                        'place' => Str::random(20),
                    ],
                    [
                        'profile_id' => $profile->id,
                        'content' => Str::random(600),
                        'place' => Str::random(20),
                    ],
                    [
                        'profile_id' => $profile->id,
                        'content' => Str::random(600),
                        'place' => Str::random(20),
                    ],
                ]
            );
            $profile->skills()->attach([1, 2, 60, 86, 338, 387, 6, 109, 64]);
            $profile->workablePlaces()->attach([1, 2, 3]);
        }
    }
}
