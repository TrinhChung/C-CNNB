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
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('fullname', 50);
            $table->string('email')->unique();
            $table->string('image')->nullable();
            $table->string('password');
            $table->smallInteger('birth_year')->nullable();
            $table->enum('gender', [-1, 0, 1])->default(-1);
            $table->enum('role', [0, 1])->default(0);
            $table->integer('company_id')->nullable();
            $table->enum('hraccepted', [0, 1])->nullable();
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
