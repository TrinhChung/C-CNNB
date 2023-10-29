<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Skill extends Model
{
    use HasFactory;

    protected $fillable = [
        'content',
    ];

    protected $primarykey = 'id';

    public $incrementing = true;

    public function profiles()
    {
        return $this->belongsToMany(Profile::class, 'skill_profile', 'skill_id', 'profile_id')
            ->using(Skill_profile::class)->withPivot('id', 'profile_id', 'skill_id')->withTimestamps();
    }
}
