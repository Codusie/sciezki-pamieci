<?php

declare(strict_types=1);

namespace App\Http\Requests;

use App\Enums\Team;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

final class UserStoreRequest extends FormRequest
{
    /**
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'team' => ['required', Rule::enum(Team::class)],
        ];
    }
}
