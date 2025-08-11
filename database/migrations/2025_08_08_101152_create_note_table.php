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
        Schema::create('note', function (Blueprint $table) {
            $table->id();
            // Relationships
            $table->foreignId('user_id')
                ->constrained('users')
                ->onDelete('cascade');

            // Note fields
            $table->string('title');
            $table->text('content')->nullable();

            // Soft delete support
            $table->softDeletes();
            $table->timestamps();
        });

        // Pivot table for collaborators
        Schema::create('note_user', function (Blueprint $table) {
            $table->id();
            $table->foreignId('note_id')
                ->constrained('notes')
                ->onDelete('cascade');

            $table->foreignId('user_id')
                ->constrained('users')
                ->onDelete('cascade');

            $table->enum('role', ['owner', 'editor', 'viewer'])->default('viewer');

            $table->timestamps();

            $table->unique(['note_id', 'user_id']); // avoid duplicate collaborators
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('note_user');
        Schema::dropIfExists('notes');
    }
};
