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
        $url = Config::get('app.chat_ai_url') . '/session/session_' . $user->id;

        $response = Http::get($url);

        $history = $response->json();

        $history = $history['conversation_history'] ?? null;

        if ($history === null) {
            throw new Exception('No response from AI');
        }

        $responses = array_map(fn($item) => [
            'sender' => match ($item['role']) {
                'user' => CharMessageSender::User,
                'assistant' => CharMessageSender::Agent,
            },
            'message' => $item['content'],
            'landmark' => $item['landmark'],
            'timestamp' => $item['timestamp'],
        ], $history);

        $responses = array_values(array_filter($responses, fn($item) => $item['landmark'] === $landmark->name));

        return Response::json($responses);
    }

    public function sendMessage(ChatMessageRequest $request, Landmark $landmark): JsonResponse
    {
        /** @var User $user */
        $user = Auth::user();
        $team = $user->team;
        $url = Config::get('app.chat_ai_url') . '/chat';


        $response = Http::post($url, [
            'session_id' => 'session_' . $user->id,
            'persona' => $team,
            'landmark' => $landmark->name,
            'query' => $request->message,
        ]);

        $json = $response->json();

        $reply = $json['response'] ?? null;
        $timestamp = $json['timestamp'] ?? null;
        $landmark_name = $json['landmark'] ?? null;

        if ($reply === null) {
            throw new Exception('No response from AI');
        }

        return Response::json([
            'sender' => CharMessageSender::Agent,
            'message' => $reply,
            'landmark' => $landmark_name,
            'timestamp'=> $timestamp,
        ]);
    }
}
