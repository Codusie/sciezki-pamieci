<?php

declare(strict_types=1);

namespace App\Enums;

enum CharMessageSender: string
{
    case User = 'user';
    case Agent = 'agent';
}
