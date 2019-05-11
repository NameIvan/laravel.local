<?php
namespace App\Http\Controllers;

use Amqp;

class RabbitController extends Controller
{
    public function index()
    {
        return view('back.rabbit.index');
    }

    public function set()
    {
        Amqp::publish('routing-key', 'message' , ['queue' => 'queue-main']);
    }

    public function get()
    {
       // return Redis::get('item');
    }
}