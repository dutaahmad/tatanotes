<?php

// app/Http/Controllers/NoteController.php
namespace App\Http\Controllers;

use App\Models\Note;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NoteController extends Controller
{
    public function index()
    {
        /** @var \App\Models\User $user */
        $user = auth()->user();
        if (!$user) {
            abort(403, 'Unauthenticated');
        }

        $notes = $user
            ->notes()
            ->latest()
            ->get()
            ->map(callback: fn($note) => [
                "id" => $note->id,
                "title" => $note->title,
                "content" => $note->content,
                "created_at" => $note->created_at
            ]);

        return Inertia::render('note/index', [
            'notes' => $notes
        ]);
    }

    public function create()
    {
        return Inertia::render('note/create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string'
        ]);

        auth()->user()->notes()->create($validated);

        return redirect()->route('notes.index');
    }

    public function edit(Request $request, Note $note)
    {
        $this->authorize('update', $note);

        return Inertia::render('note/edit', [
            'note' => $note
        ]);
    }

    public function update(Request $request, Note $note)
    {
        $this->authorize('update', $note);

        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string'
        ]);

        $note->update($validated);

        return redirect()->route('notes.index');
    }

    public function destroy(Note $note, Request $request)
    {
        $this->authorize('delete', $note);

        $note->delete();

        return redirect()->route('notes.index');
    }
}
