<?php

declare(strict_types=1);

use App\Http\Controllers\ChatController;
use App\Http\Controllers\LandmarkController;
use App\Http\Controllers\ReelController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\VisitController;
use Illuminate\Support\Facades\Route;

// User authentication
Route::post('/users', [UserController::class, 'store']);

Route::get('/landmarks', [LandmarkController::class, 'index']);
Route::get('/landmarks/{landmark}/reels', [ReelController::class, 'index']);

Route::middleware('auth:sanctum')->group(function (): void {
    Route::get('/visits', [VisitController::class, 'index']);
    Route::post('/visits', [VisitController::class, 'store']);

    Route::get('/chats/{landmark}/history', [ChatController::class, 'showHistory']);
    Route::post('/chats/{landmark}/message', [ChatController::class, 'sendMessage']);
});
