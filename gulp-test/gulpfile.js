const { src, dest, series } = require('gulp');
const concat = require('gulp-concat');

function process(){

    return src('scripts/*.js').pipe(concat('bundle.js')).pipe(dest('output/'));

    //cb();
}

exports.default = process;