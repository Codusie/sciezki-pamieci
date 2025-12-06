<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\Landmark;

final class ReelController
{
    public function index(Landmark $landmark)
    {
        return $landmark->reels;
    }
}
