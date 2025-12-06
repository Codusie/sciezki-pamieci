<?php

declare(strict_types=1);

namespace Database\Seeders;

use App\Models\Landmark;
use App\Models\Reel;
use Illuminate\Database\Seeder;

final class ReelSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // make 3-5 reels for every landmark
        foreach (Landmark::all() as $landmark) {
            Reel::factory(mt_rand(3, 5))->create([
                'landmark_id' => $landmark->id,
            ]);
        }
    }
}
