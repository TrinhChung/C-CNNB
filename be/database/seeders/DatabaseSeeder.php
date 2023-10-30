<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        AddressSeeder::run();
        CategorySeeder::run();
        LevelSeeder::run();
        SkillSeeder::run();
        YearOfDateSeeder::run();
        ExpSeeder::run();
        TypeSeeder::run();
        ApplierSeeder::run();
    }
}
