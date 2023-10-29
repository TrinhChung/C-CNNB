<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
        $this->app->singleton(
            \App\Repositories\Address\AddressRepositoryInterface::class,
            \App\Repositories\Address\AddressEloquentRepository::class
        );

        $this->app->singleton(
            \App\Repositories\Category\CategoryRepositoryInterface::class,
            \App\Repositories\Category\CategoryEloquentRepository::class,
        );

        $this->app->singleton(
            \App\Repositories\Skill\SkillRepositoryInterface::class,
            \App\Repositories\Skill\SkillEloquentRepository::class,
        );

        $this->app->singleton(
            \App\Repositories\Exp\ExpRepositoryInterface::class,
            \App\Repositories\Exp\ExpEloquentRepository::class,
        );

        $this->app->singleton(
            \App\Repositories\Task\TaskRepositoryInterface::class,
            \App\Repositories\Task\TaskEloquentRepository::class,
        );

        $this->app->singleton(
            \App\Repositories\Company\CompanyRepositoryInterface::class,
            \App\Repositories\Company\CompanyEloquentRepository::class,
        );

        $this->app->singleton(
            \App\Repositories\User\UserRepositoryInterface::class,
            \App\Repositories\User\UserEloquentRepository::class,
        );
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
