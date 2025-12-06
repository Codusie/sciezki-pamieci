<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Requests\VisitStoreRequest;
use App\Models\Visit;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Pagination\LengthAwarePaginator;

final class VisitController
{
    public function store(VisitStoreRequest $request): Response
    {
        $alreadyVisited = $request->user()
            ->visits()
            ->where('landmark_id', $request->landmark_id)
            ->exists();

        if ($alreadyVisited) {
            return response()->noContent(406);
        }

        $request->user()->visits()->create([
            'landmark_id' => $request->landmark_id,
        ]);

        return response()->noContent();
    }

    /**
     * @return LengthAwarePaginator<Visit>
     */
    public function index(Request $request): LengthAwarePaginator
    {
        return $request->user()->visits()->with('landmark')->paginate();
    }
}
