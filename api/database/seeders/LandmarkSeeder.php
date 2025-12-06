<?php

declare(strict_types=1);

namespace Database\Seeders;

use App\Models\Landmark;
use Illuminate\Database\Seeder;

final class LandmarkSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Landmark::factory()->count(10)->create();
    }
}
