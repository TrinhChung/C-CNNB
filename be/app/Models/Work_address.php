<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\Pivot;

class Work_address extends Pivot
{
    protected $fillable = [
        'workable_place_id',
        'profile_id',
    ];

    protected $primarykey = 'id';

    public $incrementing = true;
}
