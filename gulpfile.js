var gulp = require('gulp');
var zetzer = require('gulp-zetzer');

gulp.task('zetzer', function(){
   gulp.src('./app/*.html')
       .pipe(zetzer({
           partials: './app/partials',
           templates: './app/layouts',
           dot_template_settings: {
               strip: false
           },
           env: {
               env_string: 'Some plain string to use with it.document.env_string'
           }
       }))
       .pipe(gulp.dest('./dist'));
});
