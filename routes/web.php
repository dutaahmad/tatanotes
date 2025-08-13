<?php

use App\Http\Controllers\NoteController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/', [NoteController::class, 'index'])->name('notes.index');

    Route::resource('notes', NoteController::class);
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
