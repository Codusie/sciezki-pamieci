<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Enums\Team;
use App\Models\Landmark;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\JsonResponse;

final class LandmarkController
{
    /**
     * Display a listing of the resource.
     */
    public function index(): JsonResponse
    {
        $landmarks = Landmark::query()
            ->withCount([
                'visits',
                'visits as ' . Team::Twardowski->value . '_visits_count' => function (Builder $query): void {
                    $query->where('team', Team::Twardowski);
                },
                'visits as ' . Team::Rejewski->value . '_visits_count' => function (Builder $query): void {
                    $query->where('team', Team::Rejewski);
                },
                'visits as ' . Team::KazimierzWielki->value . '_visits_count' => function (Builder $query): void {
                    $query->where('team', Team::KazimierzWielki);
                },
            ])
            ->get();

        return response()->json($landmarks);
    }
}
