<?php

namespace Database\Seeders;

use App\Models\Type;
use Illuminate\Database\Seeder;

class TypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public static function run(): void
    {
        //
        $data = json_decode(file_get_contents(storage_path().'/jsonData/types.json'));
        foreach ($data as $element) {
            Type::create([
                'content' => $element->content,
            ]);
        }
    }
}
