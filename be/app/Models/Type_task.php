<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\Pivot;

class Type_task extends Pivot
{
    use HasFactory;

    protected $fillable = [
        'type_id',
        'task_id',
    ];
}
