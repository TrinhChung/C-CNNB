<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\Pivot;

class Skill_profile extends Pivot
{
    use HasFactory;

    protected $fillable = [
        'skill_id',
        'profile_id',
    ];

    protected $primarykey = 'id';

    public $incrementing = true;
}
