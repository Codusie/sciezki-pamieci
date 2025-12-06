<?php

declare(strict_types=1);

use App\Enums\Team;

it('returns an access token on POST /api/users', function (): void {
    $response = $this->postJson('/api/users', [
        'team' => Team::Twardowski->value,
    ]);

    $response->assertOk();
    $response->assertJsonStructure(['access_token']);

    $token = $response->json('access_token');

    expect($token)->toBeString();
    expect($token)->not->toBe('');
    expect($token)->toContain('|');

    $this->assertDatabaseHas('users', [
        'team' => Team::Twardowski->value,
    ]);
});
