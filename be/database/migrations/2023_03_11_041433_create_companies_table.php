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
        Schema::create('companies', function (Blueprint $table) {
            $table->increments('id');
            $table->smallInteger('role')->default(2);
            $table->string('link')->nullable();
            $table->string('name', 100)->unique();
            $table->string('image')->nullable();
            $table->longText('description')->nullable();
            $table->integer('address_id')->nullable();
            $table->string('detail_address')->nullable();
            $table->longText('renumeration_policy')->nullable();
            $table->string('tax_code')->unique();
            $table->string('email')->unique();
            $table->string('password');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('companies');
    }
};
