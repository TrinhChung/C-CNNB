<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Company extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'link',
        'image',
        'description',
        'address_id',
        'detail_address',
        'renumeration_policy',
        'tax_code',
    ];

    protected $primarykey = 'id';

    protected $keyType = 'string';

    public $incrementing = false;

    public static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            if (empty($model->id)) {
                $model->id = (string) Str::uuid();
            }
        });
    }

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
}
