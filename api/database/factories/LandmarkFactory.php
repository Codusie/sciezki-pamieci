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
        $longitude = fake()->longitude();
        $latitude = fake()->latitude();

        return [
            'name' => fake()->sentence(3),
            'localization_name' => fake()->sentence(3),
            'description' => fake()->paragraph(),
            'latitude' => $latitude,
            'longitude' => $longitude,
            'thumbnail_url' => 'https://picsum.photos/seed/' . fake()->uuid() . '/200/300',
            'map_url' => 'https://www.google.com/maps/search/?api=1&query=' . $latitude . ',' . $longitude,
        ];
    }
}
