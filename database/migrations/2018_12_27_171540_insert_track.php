<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Migrations\Migration;

class InsertTrack extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::statement(
            'INSERT INTO `tracks`
             VALUES (1, "Hello New"), (2, "Pardon"), (3, "Paint")'
        );
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
