<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
    ];

    protected $primarykey = 'id';

    public $incrementing = true;

    public function appliers()
    {
        return $this->hasMany(Profile::class, 'address_id', 'id');
    }

    public function companies()
    {
        return $this->hasMany(Company::class, 'address_id', 'id');
    }

    public function tasks()
    {
        return $this->hasMany(Task::class, 'address_id', 'id');
    }

    public function workableAppliers()
    {
        return $this->belongsToMany(Profile::class, 'work_address', 'workable_place_id', 'profile_id')
            ->using(Work_address::class)->withPivot('id', 'profile_id', 'workable_place_id')->withTimestamps();
    }
}
