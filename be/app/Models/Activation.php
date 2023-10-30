<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Activation extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'token',
        'active',
        'valid',
    ];

    protected $primarykey = 'id';

    public $incrementing = true;

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    public function company()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }
}
