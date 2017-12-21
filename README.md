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

1. Install [Laravel Passport](https://laravel.com/docs/5.5/passport)

    ```sh
    composer require laravel/passport`
    ```

1. Configure in Homestead

    ```sh
    vagrant ssh
    cd code
    php artisan migrate
    php artisan passport:install
    ```

## Development Environments with Homestead and Browsersync

1. Install [Homestead](https://laravel.com/docs/5.5/homestead)

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

1. Edit `Homestead.yaml`

    Edit ip, memory and site map:

    ```yaml
    ip: 192.168.56.111
    memory: 512
    ...
    sites:
        -
            map: laravel-angular.test
    ```

1. Edit `webpack.mix.js`

    Add:

    ```js
    // Versioning / Cache Busting
    if (mix.inProduction()) {
        mix.version();
    }

    //Browsersync Reloading
    mix.browserSync('laravel-angular.test'); //homestead site map
    ```

1. Run

    run [Vagrant](https://www.vagrantup.com/)

    ```sh
    vagrant up
    ```

    run [Browsersync](https://www.browsersync.io/)

    ```sh
    npm run watch
    ```

1. Deploy to Heroku

    [getting started with Laravel](https://devcenter.heroku.com/articles/getting-started-with-laravel)

    add heroku/nodejs build pack
    set env variables

    ```sh
    heroku config:set APP_KEY=...
    heroku config:set APP_LOG=errorlog
    heroku config:set PLATFORM=heroku
    heroku config:set DB_CONNECTION=pgsql
    ```