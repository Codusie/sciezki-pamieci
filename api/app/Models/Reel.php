<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Reel extends Model
{
    use HasFactory;

    protected $fillable = [
        'media_url',
        'landmark_id',
    ];

    public function landmark(): BelongsTo
    {
        return $this->belongsTo(Landmark::class);
    }
}