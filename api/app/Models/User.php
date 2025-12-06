<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;

final class User extends Model
{
    use HasApiTokens;
    use HasFactory;
    use HasUuids;

    protected $fillable = [
        'name',
    ];
}
