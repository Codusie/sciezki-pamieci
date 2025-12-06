<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Landmark;
use App\Models\Reel;

class ReelController
{
    public function index(Landmark $landmark)
    {
        return $landmark->reels;
    }
}
