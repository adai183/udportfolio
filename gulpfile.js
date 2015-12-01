// The directories './dist' and './out' I use in my gulfile are not production directories. 
// I only used the as build directories to check on the gulp processed files. 
// The root directory is app/.


var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    symdiff = require('gulp-symdiff'),
    html = require('symdiff-html'),
    css = require('symdiff-css'),
    uncss = require('gulp-uncss'),
    imagemin = require('gulp-imagemin'),
    critical = require('critical').stream;



gulp.task('browserSync', function() {
  browserSync({
  	port: 3333,
    server: {
      baseDir: 'app'
    },
  });
});


gulp.task('watch', ['browserSync'], function (){
  // Reloads the browser whenever HTML or JS files change
  gulp.watch('app/*.html', browserSync.reload); 
  gulp.watch('**//*.js', browserSync.reload);
  gulp.watch('**/*.css', browserSync.reload);  
});

gulp.task('cleancss', function() { 
    gulp.src('**/*.css')
        .pipe(uncss({
            html: ['app/views/pizza.html',]
        }))
        .pipe(gulp.dest('./out'));
});


gulp.task('images', function(){
  return gulp.src('app/**/*.+(png|jpg|jpeg|gif|svg)')
  .pipe(imagemin({
      // Setting interlaced to true
      progressive: true
    }))
  .pipe(gulp.dest('dist/images'))
});

// Generate & Inline Critical-path CSS
gulp.task('critical', function () {
    return gulp.src('app/views/pizza.html')
        .pipe(critical({base: 'app/views', inline: true, css: ['app/views/css/style.css']}))
        .pipe(gulp.dest('dist'));
});

// Checks CSS for unused classes
gulp.task('checkcss', function() {
  gulp.src(['app/views/css/*.css','app/views/pizza.html'])  // ALL the files
    .pipe(symdiff({
        templates: [html],  // list all templates plugins
        css: [css],          // list all css plugins
        ignore: [/^ignore/]  // classes to ignore
    })
    .on('error', function() {
        process.exit(1);    // break the build
    }));
});
