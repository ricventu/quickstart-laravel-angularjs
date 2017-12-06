# quickstart-laravel-angularjs

Simple web application to quickstart with [Laravel](https://laravel.com/) 5.5 and [AngularJS](https://angularjs.org/) 1.x with [Bootstrap](https://getbootstrap.com/docs/3.3/) 3.3

## Build from scratch

1. Create Laravel project using [Composer](https://getcomposer.org/)

    `composer create-project laravel/laravel <folder name> 5.5.*`

1. Removing the Frontend Scaffolding but keep Bootstrap

    `php artisan preset none`
    `php artisan preset bootstrap`

    _note_: in package.json change "jquery": "^3.1.1" to "jquery": "^3.2"

1. Install the Frontend dipendencies using [npm](https://www.npmjs.com/)

    `npm install`

1. Install AngularJS

    `npm install --save angular`

## API Authentication

1. Install [Laravel Passport](https://laravel.com/docs/5.5/passport#introduction)

        `composer require laravel/passport`

    