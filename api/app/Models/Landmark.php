<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

final class Landmark extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'localization_name',
        'description',
        'latitude',
        'longitude',
        'thumbnail_url',
        'map_url',
    ];

    public function reels(): HasMany
    {
        return $this->hasMany(Reel::class);
    }
}
