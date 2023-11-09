<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\Pivot;

class Save extends Pivot
{
    use HasFactory;

    protected $fillable = [
        'applier_id',
        'task_id',
    ];

    protected $primarykey = 'id';

    public $incrementing = true;
}
