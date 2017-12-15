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
   .sass('resources/assets/sass/app.scss', 'public/css')
   .copyDirectory('resources/assets/partials', 'public/partials');
   

// Versioning / Cache Busting
if (mix.inProduction()) {
  mix.version();
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
