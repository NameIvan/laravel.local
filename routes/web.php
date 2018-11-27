<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

// Chat
Route::get('chat', 'ChatController@index');

// Redis
Route::get('redis', 'RedisController@index');
Route::get('redis/set', 'RedisController@set');
Route::get('redis/get', 'RedisController@get');
