<?php

namespace Database\Seeders;

use App\Models\Address;
use Illuminate\Database\Seeder;

class AddressSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public static function run(): void
    {
        //
        $data = json_decode(file_get_contents(storage_path().'/jsonData/address.json'));
        foreach ($data as $element) {
            Address::create([
                'name' => $element->content,
            ]);
        }
    }
}
