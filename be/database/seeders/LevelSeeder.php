<?php

namespace Database\Seeders;

use App\Models\Level;
use Illuminate\Database\Seeder;

class LevelSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public static function run(): void
    {
        //
        if (Level::count() !== 0) {
            return;
        }
        $data = json_decode(file_get_contents(storage_path().'/jsonData/levels.json'));
        foreach ($data as $element) {
            Level::create([
                'content' => $element->content,
            ]);
        }
    }
}
