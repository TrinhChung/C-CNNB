<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Work_address extends Model
{
    protected $fillable = [
        'workable_place_id',
        'profile_id',
    ];

    protected $primarykey = 'id';

    public $incrementing = true;
}
