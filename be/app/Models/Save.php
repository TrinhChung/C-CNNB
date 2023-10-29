<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Save extends Model
{
    use HasFactory;

    protected $fillable = [
        'applier_id',
        'task_id',
    ];

    protected $primarykey = 'id';

    public $incrementing = true;
}
