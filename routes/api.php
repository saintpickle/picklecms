<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;

Route::get("/", function () {
    return "Hello World from API route!";
});

Route::post("/register", [AuthController::class, 'register']);
Route::post("/login", [AuthController::class, 'login']);

Route::middleware('auth.api')->group(function () {
    Route::get('/user', [AuthController::class, 'user']);
    Route::get('/settings', function () {
        return ["settings" => []];
    });
});
