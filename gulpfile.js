var gulp = require('gulp');
var replace = require('gulp-replace');

var replaceStr = '<style> .skill-info{ margin-left: 1em; }'
replaceStr += ' @media print {';
replaceStr += ' .profile-card .icon { display: block !important;}';
replaceStr += ' .social-links{ display:none !important} ';
replaceStr += ' .card-nested { page-break-inside: avoid; }';
replaceStr += ' .card { min-height: 100px !important; }';
replaceStr += ' .profile-pic img { height: 60px; width:60px;}';
replaceStr += ' .background-card h4:first-of-type {display:none;}';
replaceStr += ' .background-card .detail h4:first-of-type {display:block;}';
replaceStr += ' .background-card hr:first-of-type{display:none;}';
replaceStr += ' #skills .content li, #interests .content li, #education .content li { width: 48%; float: left; display: inline-block;}';
replaceStr += ' #references { page-break-before: always; }';
replaceStr += ' } </style>';
replaceStr += '<link rel="icon" href="apple-touch-icon.png"></head>';

gulp.task('insert-to-head', function(){
  gulp.src(['./resume.html', './index.html'])
    .pipe(replace('</head>', replaceStr))
    .pipe(gulp.dest('./'));
});