<?php

namespace Database\Seeders;

use App\Models\BirthYear;
use Illuminate\Database\Seeder;

class YearOfDateSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public static function run(): void
    {
        //
        $data = json_decode(file_get_contents(storage_path().'/jsonData/yearOfDate.json'));
        foreach ($data as $element) {
            BirthYear::create([
                'content' => $element->content,
            ]);
        }
    }
}
