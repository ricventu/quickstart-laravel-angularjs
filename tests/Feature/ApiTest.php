<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

use Laravel\Passport\Passport;

class ApiTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testGetUser()
    {
        Passport::actingAs(
            factory(\App\User::class)->create(),
            ['*']
        );
    
        $response = $this->get('/api/user');
    
        $response->assertStatus(200);
    }
}
