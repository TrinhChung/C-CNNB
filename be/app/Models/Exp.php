<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Exp extends Model
{
    use HasFactory;

    protected $fillable = [
        'content',
    ];

    protected $primarykey = 'id';

    public $incrementing = true;

    public function tasks()
    {
        return $this->hasMany(Task::class, 'year_of_experience', 'id');
    }

    public function profiles()
    {
        return $this->hasMany(Profile::class, 'year_of_experience', 'id');
    }
}
