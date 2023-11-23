<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Company extends Model
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable = [
        'name',
        'role',
        'link',
        'email',
        'image',
        'description',
        'address_id',
        'detail_address',
        'renumeration_policy',
        'tax_code',
        'password',
    ];

    protected $primarykey = 'id';

    public $incrementing = true;

    public function managedHrs()
    {
        return $this->hasMany(User::class, 'company_id', 'id');
    }

    public function address()
    {
        return $this->belongsTo(Address::class, 'address_id', 'id');
    }

    public function tasks()
    {
        return $this->hasMany(Task::class, 'company_id', 'id');
    }

    public function activationToken()
    {
        return $this->hasOne(Activation::class, 'user_id', 'id');
    }
}
