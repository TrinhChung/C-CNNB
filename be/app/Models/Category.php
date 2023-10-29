<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $fillable = [
        'content',
    ];

    protected $primarykey = 'id';

    protected $keyType = 'integer';

    public $incrementing = true;

    public function tasks()
    {
        return $this->hasMany(Task::class, 'category_id', 'id');
    }

    public function profiles()
    {
        return $this->hasMany(Profile::class, 'category_id', 'id');
    }
}
