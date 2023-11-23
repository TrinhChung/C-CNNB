<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tasks', function (Blueprint $table) {
            $table->increments('id');
            $table->text('title')->nullable(false);
            $table->integer('hr_id')->nullable(false);
            $table->integer('company_id')->nullable(false);
            $table->integer('address_id')->nullable(false);
            $table->integer('category_id')->nullable(false);
            $table->integer('amount')->nullable(false);
            $table->text('detail_address')->nullable(false);
            $table->longText('description')->nullable(false);
            $table->longText('requiment')->nullable(false);
            $table->longText('benefit')->nullable(false);
            $table->integer('salary_min')->nullable(true);
            $table->integer('salary_max')->nullable(true);
            $table->integer('year_of_experience')->nullable(true);
            $table->date('start')->nullable(false);
            $table->date('end')->nullable(false);
            $table->enum('status', [0, 1])->default(1);
            $table->enum('gender', [-1, 0, 1]);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tasks');
    }
};
