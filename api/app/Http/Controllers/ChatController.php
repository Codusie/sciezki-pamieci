<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Enums\CharMessageSender;
use App\Http\Requests\ChatMessageRequest;
use App\Models\Landmark;
use App\Models\User;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Response;

final class ChatController
{
    public function showHistory(Landmark $landmark): JsonResponse
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

    public function sendMessage(ChatMessageRequest $request, Landmark $landmark): JsonResponse
    {
        /** @var User $user */
        $user = Auth::user();
        $team = $user->team;
        $url = Config::get('app.chat_ai_url') . '/chat';

        $response = Http::post($url, [
            'session_id' => $user->id,
            'persona' => $team,
            'landmark' => $landmark->name,
            'query' => $request->message,
        ]);

        $reply = $response->json()['response'] ?? null;

        if ($reply === null) {
            throw new Exception('No response from AI');
        }

        return Response::json([
            'sender' => CharMessageSender::Agent->value,
            'message' => $reply,
        ]);
    }
}
