<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\Landmark;
use Illuminate\Http\JsonResponse;

final class LandmarkController
{
    /**
     * Display a listing of the resource.
     */
    public function index(): JsonResponse
    {
        $landmarks = Landmark::all();

        return response()->json($landmarks);
    }
}
