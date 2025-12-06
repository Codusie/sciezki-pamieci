<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Enums\Team;
use App\Models\Visit;

final class TeamController
{
    public function index(): array
    {
        $teams = [];

        foreach (Team::cases() as $team) {
            $teams[] = [
                'key' => $team->value,
                'visits' => Visit::where('team', $team->value)->count(),
            ];
        }

        return $teams;
    }
}
