var gulp = require('gulp');
// Requires the gulp-sass plugin
var browserSync = require('browser-sync');
//var uncss = require('gulp-uncss');
//var imagemin = require('gulp-imagemin');
//var critical = require('critical').stream;



gulp.task('browserSync', function() {
  browserSync({
  	port: 8080,
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
    return gulp.src('app/*.html')
        .pipe(critical({base: 'app/', inline: true, css: ['app/css/style.css']}))
        .pipe(gulp.dest('dist'));
});
