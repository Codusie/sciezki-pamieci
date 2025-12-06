<?php

declare(strict_types=1);

use App\Http\Controllers\LandmarkController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

// User authentication
Route::post('/users', [UserController::class, 'store']);

Route::get('/landmarks', [LandmarkController::class, 'index']);
