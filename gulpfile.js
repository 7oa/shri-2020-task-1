var gulp = require("gulp"),
  sass = require("gulp-sass"),
  uglify = require("gulp-uglify-es").default,
  autoprefixer = require("gulp-autoprefixer"),
  cssmin = require("gulp-cssmin"),
  babel = require("gulp-babel");

var buildPath = "build";
var srcParh = "src";

var autoprefixerOptions = {
  browsers: ["last 2 version"]
};

gulp.task("sass", function() {
  gulp
    .src(srcParh + "/scss/style.scss")
    .pipe(
      sass().on("error", function(error) {
        console.log(error);
      })
    )
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(cssmin())
    .pipe(gulp.dest(buildPath));
});

gulp.task("js", function() {
  gulp
    .src(srcParh + "/js/script.js")
    .pipe(
      babel({
        presets: ["@babel/env"]
      })
    )
    .pipe(uglify())
    .pipe(gulp.dest(buildPath));
});

gulp.task("build", ["sass", "js"]);
