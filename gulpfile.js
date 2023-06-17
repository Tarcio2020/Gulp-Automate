//Tarefas públicas são as que exportamos.
//Tarefas privadas são as que não xportamos mas podemos usar dentro de outras tarefas.


// Exportar os pacotes Gulp
const gulp = require('gulp');


function funcaoPadrao(callback) {
    console.log('Executando via Gulp');
    callback();
}

function dizOi(callback) {
    console.log('Hello Word and Gulp');
    dizTchau();
    callback();
}

function dizTchau(callback) {
    console.log('Tchau!!!');
    callback();
}

exports.default = gulp.series(funcaoPadrao, dizOi);
exports.dizOi = dizOi