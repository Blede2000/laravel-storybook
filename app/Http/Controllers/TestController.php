<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controllers\HasMiddleware;

class TestController extends Controller implements HasMiddleware
{

    public function index()
    {
        return 'test';
    }
}
