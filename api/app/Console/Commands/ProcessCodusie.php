<?php

declare(strict_types=1);

namespace App\Console\Commands;

use App\Models\Landmark;
use Illuminate\Console\Command;

final class ProcessCodusie extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'codusie:process';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Load codusie.csv and transform it into 2d array';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $path = base_path('codusie.csv');

        if (!file_exists($path)) {
            $this->error("File not found: {$path}");

            return 1;
        }

        $this->info('Reading CSV file...');

        $data = [];
        if (($handle = fopen($path, 'r')) !== false) {
            // Skip header
            fgetcsv($handle);

            while (($row = fgetcsv($handle)) !== false) {
                // Skip empty lines
                if (empty($row) || (count($row) === 1 && mb_trim($row[0]) === '')) {
                    continue;
                }

                // Split Współżędne (index 2) into Latitude and Longitude
                if (isset($row[2])) {
                    $coords = explode(',', $row[2]);
                    $lat = isset($coords[0]) ? mb_trim($coords[0]) : '';
                    $lng = isset($coords[1]) ? mb_trim($coords[1]) : '';

                    // Replace index 2 with lat and insert lng at index 3
                    array_splice($row, 2, 1, [$lat, $lng]);
                }

                $data[] = $row;
            }
            fclose($handle);
        }

        $this->info('Processed ' . count($data) . ' rows.');

        $this->info('Saving data to database...');
        $this->saveToDatabase($data);
        $this->info('Data saved to database.');

        return 0;
    }

    private function saveToDatabase(array $data): void
    {
        foreach ($data as $row) {
            $landmark = Landmark::create([
                'name' => $row[0],
                'localization_name' => $row[1],
                'description' => $row[6],
                'latitude' => $row[2],
                'longitude' => $row[3],
                'thumbnail_url' => $row[5],
                'map_url' => $row[4],
            ]);
        }
    }
}
