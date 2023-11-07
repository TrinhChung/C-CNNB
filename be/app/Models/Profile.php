<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    use HasFactory;

    protected $fillable = [
        'email',
        'address_id',
        'applier_id',
        'category_id',
        'birth_year',
        'level_id',
        'fullname',
        'gender',
        'description',
        'year_of_experience',
        'address_id',
        'desire',
    ];

    protected $primarykey = 'id';

    public $incrementing = true;

    public static function boot()
    {
        parent::boot();

        static::updated(function ($model) {
            $user = User::where('id', $model->applier_id)->first();
            if ($user) {
                $user->update([
                    'birth_year' => $model->birth_year,
                    'fullname' => $model->fullname,
                    'gender' => (int) $model->gender + 2,
                    'email' => $model->email,
                ]);
            }
        });
    }

    public function category()
    {
        return $this->belongsTo(Category::class, 'category_id', 'id');
    }

    public function applier()
    {
        return $this->belongsTo(User::class, 'applier_id', 'id');
    }

    public function projects()
    {
        return $this->hasMany(Project::class, 'profile_id', 'id');
    }

    public function expDetail()
    {
        return $this->hasMany(EXPdetail::class, 'profile_id', 'id');
    }

    public function address()
    {
        return $this->belongsTo(Address::class, 'address_id', 'id');
    }

    public function expYear()
    {
        return $this->belongsTo(Exp::class, 'year_of_experience', 'id');
    }

    public function level()
    {
        return $this->belongsTo(Level::class, 'level_id', 'id');
    }

    public function skills()
    {
        return $this->belongsToMany(Skill::class, 'skill_profile', 'profile_id', 'skill_id')
            ->using(Skill_profile::class)->withPivot('id', 'profile_id', 'skill_id')->withTimestamps();
    }

    public function workablePlaces()
    {
        return $this->belongsToMany(Address::class, 'work_address', 'profile_id', 'workable_place_id')
            ->using(Work_address::class)->withPivot('id', 'profile_id', 'workable_place_id')->withTimestamps();
    }
}
