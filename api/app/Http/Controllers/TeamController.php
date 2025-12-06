<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Requests\UserStoreRequest;
use App\Models\Visit;
use App\Enums\Team;

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
