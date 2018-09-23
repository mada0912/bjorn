const gulp = require("gulp");
const concat = require("gulp-concat");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");

gulp.task("scss", function(){
    return gulp.src("src/scss/**/*.scss")
        .pipe(sourcemaps.init())
        .pipe(sass().on("error", sass.logError))
        .pipe(sourcemaps.write())
        .pipe(concat("style.min.css"))
        .pipe(gulp.dest("pub/css"));
});

gulp.task("default", ['scss']);

