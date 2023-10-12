const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
    return src('turneytokens/**/*.scss')
        .pipe(sass())
        .pipe(dest('css'))
};

function watchTask() {
    watch(['turneytokens/**/*.scss'], buildStyles)  // watches when these files change, then compiles to css
}

exports.default = series(buildStyles, watchTask)