<?php

namespace App\Http\Controllers;


use App\Http\Requests\TrackStoreRequest;
use App\Models\Track;

class TrackController extends Controller
{
    public function index()
    {
        return response()->json(Track::all());
    }

    public function store(TrackStoreRequest $request)
    {
        $track = Track::create($request->all());

        return response()->json($track->attributesToArray());
    }
}