<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\Pivot;

class Applier_task extends Pivot
{
    use HasFactory;

    protected $fillable = [
        'applier_id',
        'task_id',
        'fail',
    ];

    protected $primarykey = 'id';

    public $incrementing = true;
}
