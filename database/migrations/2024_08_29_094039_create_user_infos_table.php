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
        Schema::create('user_infos', function (Blueprint $table) {
            $table->id();
            $table->string('user_id');
            $table->string('meta_key');
            $table->string('meta_value')->nullable();
            $table->timestamps();
            //Combined Constraint on two column 'attribute_id', 'value'
            $table->unique(['user_id', 'meta_key'], 'unique_user_id_meta_key');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_infos');
    }
};