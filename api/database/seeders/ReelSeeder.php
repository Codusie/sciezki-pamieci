<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Reel;
use App\Models\Landmark;

class ReelSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // make 3-5 reels for every landmark
        foreach (Landmark::all() as $landmark) {
            Reel::factory(rand(3, 5))->create([
                'landmark_id' => $landmark->id,
            ]);
        }
    }
}
