<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Model;

class Track extends Model
{
    public $timestamps = false;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'tracks';

    protected $fillable = ['name'];
}
