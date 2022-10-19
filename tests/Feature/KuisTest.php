<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class KuisTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_login()
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }

    public function test_halaman()
    {
        $response = $this->get('/dashboard');

        $response->assertStatus(429);
    }

    public function test_logout()
    {
        $response = $this->get('/logout');

        $response->assertStatus(405);
    }
}
