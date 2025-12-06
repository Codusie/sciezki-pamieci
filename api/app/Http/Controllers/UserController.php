<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\User;

final class UserController
{
    public function store(): array
    {
        $guest = User::create();

        $token = $guest->createToken('user-token')->plainTextToken;

        return [
            'access_token' => $token,
        ];
    }
}
