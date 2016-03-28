var gulp = require('gulp');
var replace = require('gulp-replace');

var replaceStr = '<style> .skill-info{ margin-left: 1em; } @media print { .profile-card .icon { display: block !important;} .social-lnks{ display:none !importnt; } } </style>';
replaceStr += '<link rel="icon" href="apple-touch-icon.png"></head>';

gulp.task('insert-to-head', function(){
  gulp.src(['./resume.html', './index.html'])
    .pipe(replace('</head>', replaceStr))
    .pipe(gulp.dest('./'));
});