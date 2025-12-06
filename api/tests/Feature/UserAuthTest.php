<?php

declare(strict_types=1);

it('returns an access token on POST /api/users', function (): void {
    $response = $this->postJson('/api/users');

    $response->assertOk();
    $response->assertJsonStructure(['access_token']);

    $token = $response->json('access_token');

    expect($token)->toBeString();
    expect($token)->not->toBe('');
    expect($token)->toContain('|');
});
