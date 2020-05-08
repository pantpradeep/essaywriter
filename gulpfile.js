const gulp = require('gulp');
const sass = require('gulp-sass')
const browserSync = require('browser-sync').create();
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
//compile scss into css
function style(){
    //1. where is my scss file
    return gulp.src('./scss/**/*.scss')
    //2. pass that file to compiler
    .pipe(sass())
    //3. where do i save css
    .pipe(gulp.dest('./css'))
    //4. stream changes to all browser
    .pipe(browserSync.stream());
}
function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./scss/**/*.scss',style)
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}
gulp.task('uglify', async function(){
    gulp.src('js/**/*.js')
    .pipe(uglify())
   // .pipe( rename({ suffix:'min'}))
    .pipe(gulp.dest('js/minified'));
})
exports.style = style;
exports.watch = watch;