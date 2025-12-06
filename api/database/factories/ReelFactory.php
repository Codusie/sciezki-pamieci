<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Landmark;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Reel>
 */
class ReelFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'media_url' => 'https://picsum.photos/seed/' . fake()->uuid() . '/200/300',
        ];
    }
}
