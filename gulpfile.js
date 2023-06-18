//Tarefas públicas são as que exportamos.
//Tarefas privadas são as que não xportamos mas podemos usar dentro de outras tarefas.


// Exportar os pacotes Gulp
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));


//Função para compilar todos arquivos sass em css
//Usando o * estamos selecionando todos os arquivos SASS >> SCSS << '.source/style/*.scss'.
//pipe -- Vai encadear as funções, sem ele não poderiamos chamar outra função depois do gulp.src
function compilaSass() {
    return gulp.src('./source/styles/*.scss')
        .pipe(sass())
        //Essa função irá mandar toda a compilação para os destino final.
        .pipe(gulp.dest('./build/styles'));
    }
    
    exports.sass = compilaSass;
/*
//Essa tarefa irá rodar 10s depois de todas as outras.
function funcaoPadrao(callback) {
    setTimeout(function() {

        console.log('Primeira tarefa via Gulp');
        callback();
    }, 5000) 
}

function dizOi(callback) {
    setTimeout(function(){
        console.log('Hello Word and Gulp');
        funcaoPadrao();
        callback();

    },)
}

function dizTchau(callback) {
    setTimeout(function() {
        console.log('Última tarefa, TChauuuuu!!!');
        callback();
    },)
}



//para executar tarefas em SÉRIE:
//exports.default = gulp.series(funcaoPadrao, dizOi);  

//para executar tarefas em PARALELAMENTE:
exports.default = gulp.parallel(funcaoPadrao, dizTchau, dizOi); 
exports.dizOi = dizOi;
exports.dizTchau = dizTchau;
//^^^^^^^^^^Observar a sequência de cima^^^^^^^^^^
*/
