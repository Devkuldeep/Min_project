const gulp = require('gulp');
const clean = require('gulp-clean');

// **Task: Clean the _site directory**
function cleanSite() {
  return gulp.src('_site', { read: false, allowEmpty: true })
             .pipe(clean());
}

// **Task: Copy files from Project 1**
function copyProject1() {
  return gulp.src('project1/**/*')
             .pipe(gulp.dest('_site/project1'));
}

// **Task: Copy files from Project 2**
function copyProject2() {
  return gulp.src('project2/**/*')
             .pipe(gulp.dest('_site/project2'));
}

// **Default Task:** Runs tasks in series: clean _site, then copy both projects.
exports.default = gulp.series(cleanSite, copyProject1, copyProject2);
