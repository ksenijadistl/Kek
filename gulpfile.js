"use strict";
const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const browserSync = require("browser-sync").create();
const concat = require("gulp-concat");

gulp.task("sass", function async() {
  return gulp
    .src("./scss/**/*.scss")
    .pipe(concat("main.scss"))
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./css/"))
    .pipe(browserSync.stream());
});

gulp.task("sass:watch", function () {
  gulp.watch("./scss/**/*.scss", gulp.series("sass"));
});

gulp.task("serve", function () {
  browserSync.init({
    proxy: "localhost:80/mihajlo/",
  });

  gulp.watch("./scss/**/*.scss", gulp.series("sass"));
});
