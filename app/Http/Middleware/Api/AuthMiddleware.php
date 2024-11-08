<?php

namespace App\Http\Middleware\Api;

use Closure;
use Illuminate\Http\Request;
use App\Models\User;

class AuthMiddleware
{
    public function handle(Request $request, Closure $next)
    {
        // Check if the API key is provided
        $apiKey = $request->header('x-api-key');

        if (!$apiKey) {
            return response()->json(['error' => 'API key missing'], 401);
        }

        // Find the user by API key
        $user = User::where('api_key', $apiKey)->first();

        if (!$user) {
            return response()->json(['error' => 'Invalid API key'], 403);
        }

        // Optionally, attach the user to the request for further use
        $request->merge(['user' => $user]);

        return $next($request);
    }
}
