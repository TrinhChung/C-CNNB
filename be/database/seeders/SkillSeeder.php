<?php

namespace Database\Seeders;

use App\Models\Skill;
use Illuminate\Database\Seeder;

class SkillSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public static function run(): void
    {
        //
        $data = json_decode(file_get_contents(storage_path().'/jsonData/skills.json'));
        foreach ($data as $element) {
            Skill::create([
                'content' => $element->content,
            ]);
        }
    }
}
