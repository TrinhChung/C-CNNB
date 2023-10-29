<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EXPdetail extends Model
{
    use HasFactory;

    protected $fillable = [
        'profile_id',
        'place',
        'content',
    ];

    protected $primarykey = 'id';

    public $incrementing = true;

    public function profile()
    {
        return $this->belongsTo(Profile::class, 'profile_id', 'id');
    }
}
