<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Level extends Model
{
    use HasFactory;

    protected $fillable = [
        'content',
    ];

    protected $primarykey = 'id';

    public $incrementing = true;

    public function profiles()
    {
        return $this->hasMany(Profile::class, 'level_id', 'id');
    }
}
