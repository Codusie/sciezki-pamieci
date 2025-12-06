<?php

declare(strict_types=1);

use App\Enums\Team;
use App\Models\Landmark;
use App\Models\User;

it('stores a visit on POST /api/visits', function (): void {
    $user = User::create([
        'team' => Team::Twardowski->value,
    ]);

    $token = $user->createToken('test')->plainTextToken;

    $landmark = Landmark::factory()->create();

    $response = $this->withToken($token)->postJson('/api/visits', [
        'landmark_id' => $landmark->id,
    ]);

    $response->assertNoContent();

    $this->assertDatabaseHas('visits', [
        'user_id' => $user->id,
        'landmark_id' => $landmark->id,
    ]);
});

it('lists authenticated user visits on GET /api/visits', function (): void {
    $user = User::create([
        'team' => Team::Twardowski->value,
    ]);

    $token = $user->createToken('test')->plainTextToken;

    $landmarks = Landmark::factory()->count(2)->create();

    $user->visits()->create([
        'team' => Team::Twardowski->value,
        'landmark_id' => $landmarks[0]->id]);
    $user->visits()->create([
        'team' => Team::Twardowski->value,
        'landmark_id' => $landmarks[1]->id,
    ]);
    $user->visits()->create([
        'team' => Team::Twardowski->value,
        'landmark_id' => $landmarks[0]->id,
    ]);

    $other = User::create([
        'team' => Team::Rejewski->value,
    ]);
    $other->createToken('other')->plainTextToken;
    $other->visits()->create([
        'team' => Team::Rejewski->value,
        'landmark_id' => $landmarks[0]->id,
    ]);

    $response = $this->withToken($token)->getJson('/api/visits');

    $response->assertOk();

    $data = $response->json('data');

    expect($data)->toBeArray();
    expect(count($data))->toBe(3);

    foreach ($data as $item) {
        expect($item['user_id'])->toBe($user->id);
    }
});

it('requires authentication for visits endpoints', function (): void {
    $this->getJson('/api/visits')->assertUnauthorized();
    $this->postJson('/api/visits', ['landmark_id' => 1])->assertUnauthorized();
});

it('validates landmark_id when storing a visit', function (): void {
    $user = User::create([
        'team' => Team::Twardowski->value,
    ]);

    $token = $user->createToken('test')->plainTextToken;

    $response = $this->withToken($token)->postJson('/api/visits', []);
    $response->assertStatus(422);
    $response->assertJsonStructure([
        'message',
        'errors' => ['landmark_id'],
    ]);

    $response = $this->withToken($token)->postJson('/api/visits', [
        'landmark_id' => 999999,
    ]);
    $response->assertStatus(422);
    $response->assertJsonStructure([
        'message',
        'errors' => ['landmark_id'],
    ]);
});

it('blocks duplicate visits to the same landmark with 406', function (): void {
    $user = User::create([
        'team' => Team::Twardowski->value,
    ]);

    $token = $user->createToken('test')->plainTextToken;
    $landmark = Landmark::factory()->create();

    $first = $this->withToken($token)->postJson('/api/visits', [
        'landmark_id' => $landmark->id,
    ]);
    $first->assertNoContent();

    $second = $this->withToken($token)->postJson('/api/visits', [
        'landmark_id' => $landmark->id,
    ]);
    $second->assertStatus(406);

    $this->assertDatabaseCount('visits', 1);
    $this->assertDatabaseHas('visits', [
        'user_id' => $user->id,
        'landmark_id' => $landmark->id,
    ]);
});
