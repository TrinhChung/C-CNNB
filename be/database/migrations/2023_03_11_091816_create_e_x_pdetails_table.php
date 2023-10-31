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
        Schema::create('e_x_pdetails', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('profile_id')->nullable(false);
            $table->text('place')->nullable(false);
            $table->longText('content')->nullable(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('e_x_pdetails');
    }
};
