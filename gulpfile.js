const gulp = require("gulp");
const gap = require("gulp-append-prepend");

gulp.task("licenses", async function () {
  gulp
    .src("build/static/js/*chunk.js", { base: "./" })
    .pipe(
      gap.prependText(`/*!

=========================================================
* JayStore
=========================================================

* Our Site: https://www.dotjs.net
* Copyright 2020 DotJs
* Coded by Junaid Raza

=========================================================

*/`)
    )
    .pipe(gulp.dest("./", { overwrite: true }));
  gulp
    .src("build/index.html", { base: "./" })
    .pipe(
      gap.prependText(`<!--

=========================================================
* JayStore
=========================================================

* Our Site: https://www.dotjs.net
* Copyright 2020 DotJs
* Coded by Junaid Raza

=========================================================
-->`)
    )
    .pipe(gulp.dest("./", { overwrite: true }));
  gulp
    .src("build/static/css/*chunk.css", { base: "./" })
    .pipe(
      gap.prependText(`/*!

=========================================================
* JayStore
=========================================================

* Our Site: https://www.dotjs.net
* Copyright 2020 DotJs
* Coded by Junaid Raza

=========================================================
*/`)
    )
    .pipe(gulp.dest("./", { overwrite: true }));
  return;
});
