<?php

namespace App\Http\Controllers;


class ChatController extends Controller
{
    public function index()
    {
        return view('back.chat.index');
    }
}