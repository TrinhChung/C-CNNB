<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Str;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'fullname',
        'email',
        'image',
        'password',
        'company_id',
        'birth_year',
        'gender',
        'role',
        'hraccepted',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
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

    public function appliedTasks()
    {
        return $this->belongsToMany(Task::class, 'applier_task', 'applier_id', 'task_id')
            ->using(Applier_task::class)->withPivot('id', 'applier_id', 'task_id', 'fail')->withTimestamps();
    }

    public function savedTasks()
    {
        return $this->belongsToMany(Task::class, 'save', 'applier_id', 'task_id')
            ->using(Save::class)->withPivot('id', 'applier_id', 'task_id')->withTimestamps();
    }

    public function managedTasks()
    {
        return $this->hasMany(Task::class, 'hr_id', 'id');
    }

    public function managedBy()
    {
        return $this->belongsTo(Company::class, 'company_id', 'id');
    }

    public function profile()
    {
        return $this->hasOne(Profile::class, 'applier_id', 'id');
    }

    public function birthYear()
    {
        return $this->belongsTo(BirthYear::class, 'birth_year', 'id');
    }

    public function activationToken()
    {
        return $this->hasOne(Activation::class, 'user_id', 'id');
    }
}
