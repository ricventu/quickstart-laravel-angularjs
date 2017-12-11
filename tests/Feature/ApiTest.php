<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\DatabaseTransactions;

use Laravel\Passport\Passport;

class ApiTest extends TestCase
{
    use DatabaseTransactions;

    /**
     * A basic test example.
     *
     * @return void
     */
    public function testGetUser()
    {
        $user = factory(\App\User::class)->create();
        Passport::actingAs($user, ['*']);
    
        $response = $this->get('/api/user');

        $response->assertStatus(200)->assertJson($user->toArray());
    }
}
