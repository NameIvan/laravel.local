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

// Rabbit
Route::get('rabbit', 'RabbitController@index');
Route::get('rabbit/set', 'RabbitController@set');
Route::get('rabbit/get', 'RabbitController@get');

// React
Route::get('react', 'ReactController@index');
Route::get('react/redux', 'ReactController@redux');

//Track
Route::get('track', 'TrackController@index');
Route::post('track/store', 'TrackController@store');
