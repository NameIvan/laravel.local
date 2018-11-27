<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Redis;


class RedisController extends Controller
{

    public function index()
    {
        return view('back.redis.index');
    }

    public function set()
    {
        Redis::set('item', rand(1,50));
    }

    public function get()
    {
        return Redis::get('item');
    }
}