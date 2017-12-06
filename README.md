# quickstart-laravel-angularjs

Simple web application to quickstart with [Laravel](https://laravel.com/) 5.5 and [AngularJS](https://angularjs.org/) 1.x with [Bootstrap](https://getbootstrap.com/docs/3.3/) 3.3

## How-to build from scratch

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

## Development Environments with [Homestead](https://laravel.com/docs/5.5/homestead)

1. Install

    ```sh
    composer require --dev laravel/homestead
    ```

1. Create homestead configuration

    ```sh
    php vendor/bin/homestead make
    ```

    or

    ```sh
    ./vendor/bin/homestead make
    ```

1. Run [Vagrant](https://www.vagrantup.com/)

    Edit `Homestead.yaml`

    ```sh
    vagrant up
    ```
