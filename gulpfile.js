var gulp = require('gulp');
var replace = require('gulp-replace');
var watch = require('gulp-watch');
var shell = require('gulp-shell')

var replaceStr = '<style id="look-here"> .skill-info{ margin-left: 1em; }'
replaceStr += ' @media print {';
replaceStr += ' .profile-card .icon { display: block !important;}';
replaceStr += ' .social-links{ display:none !important} ';
replaceStr += ' .card-nested { page-break-inside: avoid; }';
replaceStr += ' .card { min-height: 100px !important; }';
replaceStr += ' .profile-pic img { height: 60px; width:60px;}';
replaceStr += ' .background-card h4:first-of-type {display:none;}';
replaceStr += ' .background-card .detail h4:first-of-type {display:block;}';
replaceStr += ' .background-card hr:first-of-type{display:none;}';
replaceStr += ' #skills .content li, #interests .content li,';
replaceStr += ' #education .content li { width: 48%; float: left; display: inline-block;}';
replaceStr += ' #references { page-break-before: always; }';
replaceStr += ' } ';
replaceStr += ' </style>\n ';
// replaceStr += ' <script>\n ';
// replaceStr += ' var string = `/******************************************\n';
// replaceStr += ' *******************************************\n';
// replaceStr += ' **                                       **\n';
// replaceStr += ' **  Thanks looking at my resume!         **\n';
// replaceStr += ' **                                       **\n';
// replaceStr += ' **  This resume was built with the       **\n';
// replaceStr += ' **  resume-cli tool from the folks at    **\n';
// replaceStr += ' **  https://jsonresume.org.              **\n';
// replaceStr += ' **  The template is not my own           **\n';
// replaceStr += ' **  work, but I did add some special     **\n';
// replaceStr += ' **  print css above and make some pull   **\n';
// replaceStr += ' **  requests on the project and theme.   **\n';
// replaceStr += ' **                                       **\n';
// replaceStr += ' **  Since you like to sneak peeks at     **\n';
// replaceStr += ' **  code, you might be interested        **\n';
// replaceStr += ' **  working with me. I hope to talk      **\n';
// replaceStr += ' **  with you soon!                       **\n';
// replaceStr += ' **                                       **\n';
// replaceStr += ' **  Thanks for your time,                **\n';
// replaceStr += ' **  -Al                                  **\n';
// replaceStr += ' **                                       **\n';
// replaceStr += ' *******************************************\n';
// replaceStr += ' ******************************************/\n`;';
// replaceStr += 'console.log(string);'
// replaceStr += ' </script>';
replaceStr += '<link rel="icon" href="apple-touch-icon.png"></head>';

gulp.task('insert-to-head', function(){
  gulp.src(['./resume.html', './index.html'])
    .pipe(replace('</head>', replaceStr))
    .pipe(gulp.dest('./'));
});

gulp.task('make-html', function(){
  gulp.src(['./resume.html', './index.html'])
    .pipe(replace('&lt;', '<'))
    .pipe(replace('&gt;', '>'))
    .pipe(gulp.dest('./'));
})

gulp.task('build-resume', shell.task([
  'resume export -t elegant -f html index',
  'gulp insert-to-head', 'gulp make-html'
]))

gulp.task('watch', function(){
  gulp.watch('./*.json', ['build-resume']); 
  gulp.watch('./*.js', ['insert-to-head', 'make-html']);
})
