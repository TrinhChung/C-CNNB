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
        Schema::create('profiles', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('applier_id');
            $table->smallInteger('birth_year')->nullable();
            $table->smallInteger('level_id')->nullable();
            $table->string('email');
            $table->integer('address_id')->nullable();
            $table->integer('category_id')->nullable();
            $table->string('fullname', 50);
            $table->enum('gender', [-1, 0, 1]);
            $table->longText('description')->nullable();
            $table->integer('year_of_experience')->nullable();
            $table->longText('desire')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('profiles');
    }
};
