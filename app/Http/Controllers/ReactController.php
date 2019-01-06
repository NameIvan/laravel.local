<?php

namespace App\Http\Controllers;


class ReactController extends Controller
{
    public function index()
    {
        return view('back.react.index');
    }

    public function redux()
    {
        return view('back.react.redux');
    }
}