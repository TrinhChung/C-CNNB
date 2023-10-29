<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Type extends Model
{
    use HasFactory;

    protected $fillable = [
        'content',
    ];

    protected $primarykey = 'id';

    public $incrementing = true;

    public function tasks()
    {
        return $this->belongsToMany(Task::class, 'type_task', 'type_id', 'task_id')
            ->using(Type_task::class)->withPivot('id', 'type_id', 'task_id')->withTimestamps();
    }
}
