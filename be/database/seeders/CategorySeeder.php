<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public static function run(): void
    {
        //
        if (Category::count() !== 0) {
            return;
        }
        $data = json_decode(file_get_contents(storage_path().'/jsonData/categories.json'));
        foreach ($data as $element) {
            Category::create([
                'content' => $element->content,
            ]);
        }
    }
}
