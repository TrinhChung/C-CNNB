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
            $table->uuid('id')->primary();
            $table->string('title')->nullable(false);
            $table->uuid('hr_id')->nullable(false);
            $table->uuid('company_id')->nullable(false);
            $table->integer('address_id')->nullable(false);
            $table->integer('category_id')->nullable(false);
            $table->integer('amount')->nullable(false);
            $table->string('detail_address')->nullable(false);
            $table->string('description')->nullable(false);
            $table->string('requiment')->nullable(false);
            $table->string('method')->nullable(false);
            $table->integer('salary_min')->nullable(true);
            $table->integer('salary_max')->nullable(true);
            $table->integer('year_of_experience')->nullable(true);
            $table->date('start')->nullable(false);
            $table->date('end')->nullable(false);
            $table->enum('status', [1, 0])->default(1);
            $table->enum('gender', [1, 0, -1])->default(-1);
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
