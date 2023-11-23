<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'hr_id',
        'company_id',
        'address_id',
        'category_id',
        'detail_address',
        'description',
        'requiment',
        'amount',
        'benefit',
        'salary_min',
        'salary_max',
        'year_of_experience',
        'start',
        'end',
        'status',
        'gender',
    ];

    protected $primarykey = 'id';

    public $incrementing = true;

    public static function boot()
    {
        parent::boot();

        static::deleting(function ($model) {
            $model->appliedBy()->detach();
            $model->savedBy()->detach();
        });
    }

    public function category()
    {
        return $this->belongsTo(Category::class, 'category_id', 'id');
    }

    public function expYear()
    {
        return $this->belongsTo(Exp::class, 'year_of_experience', 'id');
    }

    public function types()
    {
        return $this->belongsToMany(Type::class, 'type_task', 'task_id', 'type_id')
            ->using(Type_task::class)->withPivot('id', 'type_id', 'task_id')->withTimestamps();
    }

    public function appliedBy()
    {
        return $this->belongsToMany(User::class, 'applier_task', 'task_id', 'applier_id')
            ->using(Applier_task::class)->withPivot('id', 'applier_id', 'task_id', 'fail')->withTimestamps();
    }

    public function savedBy()
    {
        return $this->belongsToMany(User::class, 'save', 'task_id', 'applier_id')
            ->using(Save::class)->withPivot('id', 'applier_id', 'task_id')->withTimestamps();
    }

    public function company()
    {
        return $this->belongsTo(Company::class, 'company_id', 'id');
    }

    public function hr()
    {
        return $this->belongsTo(User::class, 'hr_id', 'id');
    }

    public function address()
    {
        return $this->belongsTo(Address::class, 'address_id', 'id');
    }
}
