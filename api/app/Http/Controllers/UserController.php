<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Requests\UserStoreRequest;
use App\Models\User;

final class UserController
{
    public function store(UserStoreRequest $request): array
    {
        $guest = User::create([
            'team' => $request->team,
        ]);

        $token = $guest->createToken('user-token')->plainTextToken;

        return [
            'access_token' => $token,
        ];
    }
}
