<?php

// app/Http/Resources/NoteResource.php
namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript]
/**
 * @mixin \App\Models\Note
 */
class NoteResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'content' => $this->content,
            'created_at' => $this->created_at->toDateTimeString(),
        ];
    }
}
