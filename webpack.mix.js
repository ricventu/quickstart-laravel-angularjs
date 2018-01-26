let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/app.js', 'public/js')
.extract([ 
  'angular','@uirouter/angularjs', 'angular-oauth2', 'angular-cookies' 
])
.sass('resources/assets/sass/app.scss', 'public/css')
.copyDirectory('resources/assets/partials', 'public/partials');


if (mix.inProduction()) {
  // Versioning / Cache Busting
  mix.version();
} else {  
  mix.sourceMaps();
  mix.webpackConfig({ devtool: "source-map" });
}

//Browsersync Reloading
mix.browserSync({
proxy: 'laravel-angular.test', //homestead site map
files: [ // files to watch
  'app/**/*.php',
  'resources/views/**/*.php',
  'public/js/**/*.js',
  'public/css/**/*.css',
  'public/partials/**/*.html'
]
});
