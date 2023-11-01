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
            $table->uuid('applier_id')->nullable(false);
            $table->smallInteger('birth_year')->nullable(false);
            $table->smallInteger('level_id')->nullable(false);
            $table->string('email')->nullable(false);
            $table->integer('address_id')->nullable(false);
            $table->integer('category_id')->nullable(false);
            $table->string('fullname', 50)->nullable(false);
            $table->enum('gender', [-1, 0, 1])->nullable(false);
            $table->longText('description')->nullable(false);
            $table->integer('year_of_experience')->nullable(false);
            $table->longText('desire')->nullable(false);
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
