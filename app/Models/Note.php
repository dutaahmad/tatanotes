<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Note extends Model {

    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, SoftDeletes;

    protected $table = 'note';

    protected $fillable = [
        "user_id",
        "title",
        "content"
    ];


    protected $dates = ['deleted_at'];
    /**
     * Relationships
     */

    // Owner of the note
    public function owner()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    // Users with access to the note (collaborators)
    public function collaborators()
    {
        return $this->belongsToMany(User::class, 'note_user')
                    ->withPivot('role') // owner, editor, viewer
                    ->withTimestamps();
    }

    // Version history
    public function versions()
    {
        return $this->hasMany(NoteVersion::class);
    }
}