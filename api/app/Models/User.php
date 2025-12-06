<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Laravel\Sanctum\HasApiTokens;

final class User extends Model
{
    use HasApiTokens;
    use HasFactory;

    protected $fillable = [
        'name',
        'team',
    ];

    public function visits(): HasMany
    {
        return $this->hasMany(Visit::class);
    }
}
