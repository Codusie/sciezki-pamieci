<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

final class Visit extends Model
{
    protected $fillable = [
        'user_id',
        'landmark_id',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function landmark(): BelongsTo
    {
        return $this->belongsTo(Landmark::class);
    }
}
