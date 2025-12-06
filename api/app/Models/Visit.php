<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

final class Visit extends Model
{
    protected $fillable = [
        'user_id',
        'landmark_id',
    ];
}
