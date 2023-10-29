<?php

namespace Database\Seeders;

use App\Models\Exp;
use Illuminate\Database\Seeder;

class ExpSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public static function run(): void
    {
        //
        $data = json_decode(file_get_contents(storage_path().'/jsonData/exp.json'));
        foreach ($data as $element) {
            Exp::create([
                'content' => $element->content,
            ]);
        }
    }
}
