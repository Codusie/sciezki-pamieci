<?php

declare(strict_types=1);

namespace App\Console\Commands;

use Exception;
use Illuminate\Console\Command;
use App\Models\Landmark;

class ProcessCodusie extends Command
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
        try {
            $content = $this->readCsv(base_path('codusie.csv'));
            
            $this->info('Reading CSV file...');
            $data = $this->transformCsv($content);
            $this->info('Processed ' . count($data) . ' rows.');

            $this->info('Saving data to database...');
            $this->saveToDatabase($data);
            $this->info('Data saved to database.');
        } catch (Exception $e) {
            $this->error($e->getMessage());
            return 1;
        }

        return 0;
    }

    private function readCsv(string $path): ?string
    {
        if (!file_exists($path)) {
            $this->error("File not found: {$path}");
            throw new Exception("File not found: {$path}");
        }

        return file_get_contents($path);
    }

    /**
     * Transform CSV content into array
     * 
     * @param string $content
     * @return array
     */
    private function transformCsv(string $content): array
    {
        $lines = explode("\n", $content);
        $lines = array_slice($lines, 2);

        $data = [];
        foreach ($lines as $line) {
            // Skip empty lines (e.g. trailing newline)
            if (trim($line) === '') {
                continue;
            }

            // Transform line into array
            // Using str_getcsv instead of explode to correctly handle quoted fields containing commas
            $row = str_getcsv($line);

            // Discard first element of every line
            array_shift($row);

            // Split Współżędne (index 2) into Latitude and Longitude
            if (isset($row[2])) {
                $coords = explode(',', $row[2]);
                $lat = isset($coords[0]) ? trim($coords[0]) : '';
                $lng = isset($coords[1]) ? trim($coords[1]) : '';
                
                // Replace index 2 with lat and insert lng at index 3
                array_splice($row, 2, 1, [$lat, $lng]);
            }

            $data[] = $row;
        }

        return $data;
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
