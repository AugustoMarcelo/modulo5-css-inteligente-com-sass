var gulp = require("gulp");
var sass = require("gulp-sass");
var cleanCSS = require("gulp-clean-css");
var minifyHTML = require("gulp-minify-html-2");

/*
 * Monitora os arquivos .SASS checando se houve mudanças em seus códigos
 * Quando houver, executa a tarefa compilar-sass

 * Monitora o arquivo index.html checando se houve mudanças em seu código
 * Quando houver, executa a tarefa de minificar-html
 */
gulp.task("monitorar-arquivos", function () {
	gulp.watch("source/scss/style.scss", ["compilar-sass"]);
	gulp.watch("source/index.html", ["minificar-html"]);
});

/*
 * 1. Procura pelo arquivo index.html na pasta source;
 * 2. O minifica através do plugin gulp-minify-html-2;
 * 3. Move o arquivo minificado para a pasta dist. 
 */
gulp.task("minificar-html", function () {
	return gulp.src("source/index.html")
				.pipe(minifyHTML())
				.pipe(gulp.dest("dist/"));
});

/* 
 * 1. Procura todos os arquivos da pasta scss que tenha extensão .SCSS;
 * 2. Os compila através do plugin gulp-sass, gerando os arquivos .CSS;
 * 3. Minifica os arquivos .CSS gerados através do plugin gulp-clena-css;
 * 4. Move os arquivos .CSS gerados para a pasta CSS.
 */ 
gulp.task("compilar-sass", function () {
	return gulp.src("source/scss/style.scss")
	           .pipe(sass())
	           .pipe(cleanCSS())
	           .pipe(gulp.dest("dist/css"));
});