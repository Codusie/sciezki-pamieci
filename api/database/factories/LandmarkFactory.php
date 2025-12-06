<?php

declare(strict_types=1);

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Landmark>
 */
final class LandmarkFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->sentence(3),
            'description' => fake()->paragraph(),
            'latitude' => fake()->latitude(),
            'longitude' => fake()->longitude(),
            'thumbnail_url' => 'https://picsum.photos/seed/' . fake()->uuid() . '/200/300',
        ];
    }
}
