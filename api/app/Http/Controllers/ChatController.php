<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Enums\CharMessageSender;
use App\Http\Resources\ChatResponseResource;
use App\Models\Landmark;
use App\Models\User;
use Exception;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Http;

final class ChatController
{
    public function showHistory(Landmark $landmark): AnonymousResourceCollection
    {
        /** @var User $user */
        $user = Auth::user();
        $team = $user->team;
        $url = Config::get('app.chat_ai_url') . '/session/' . $user->id;

        $response = Http::get($url)->json();

        // $responses = array_map(fn($item) => [
        //     'sender' => $item['sender'],
        //     'message' => $item['response'],
        // ], $response);

        print_r($response);

        if ($response === null) {
            throw new Exception('No response from AI');
        }

        // $responses = array_map(fn($item) => [
        //     'sender' => $item['sender'],
        //     'message' => $item['response'],
        // ], $response);

        // return ChatResponseResource::collection([
        //     'sender' => CharMessageSender::Agent,
        //     'message' => $reply,
        // ]);

        
    }

    public function sendMessage(Landmark $landmark): ChatResponseResource
    {
        /** @var User $user */
        $user = Auth::user();
        $team = $user->team;
        $url = Config::get('app.chat_ai_url') . '/chat';

        $response = Http::post($url, [
            'session_id' => $user->id,
            'persona' => $team,
            'landmark' => $landmark->name,
            'query' => 'Hello, how are you?',
        ]);

        $reply = $response->json()['response'] ?? null;

        if ($reply === null) {
            throw new Exception('No response from AI');
        }

        return ChatResponseResource::make([
            'sender' => CharMessageSender::Agent,
            'message' => $reply,
        ]);
    }
}
