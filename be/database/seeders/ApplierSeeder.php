<?php

namespace Database\Seeders;

use App\Models\User;
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
        for ($i = 1; $i <= 10; $i++) {
            User::create(
                [
                    'fullname' => Str::random('10'),
                    'email' => $i.'abcd@gmail.com',
                    'password' => '123123123',
                    'birth_year' => 5,
                    'gender' => 1,
                    'role' => 0,
                ]
            );
        }
    }
}
