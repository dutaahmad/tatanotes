<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class NoteVersion extends Model
{
    use SoftDeletes, HasFactory;

    protected $fillable = [
        "note_id",
        "user_id",
        "content"
    ];

    protected $dates = ["deleted_at"];

    public function note()
    {
        return $this->belongsTo(Note::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}