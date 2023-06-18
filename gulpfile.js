//Tarefas públicas são as que exportamos.
//Tarefas privadas são as que não xportamos mas podemos usar dentro de outras tarefas.


// Exportar os pacotes Gulp
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');
const imagemin = require('gulp-imagemin');


function comprimeImagen() {
    return gulp.src('./source/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'))
}

//Função para MINIMIZAR o JS.
function comprimeJs() {
    return gulp.src('./source/scripts/*.js')
    .pipe(uglify())
    .pipe(obfuscate())
    .pipe(gulp.dest('./build/scripts'))

}


//Função para compilar todos arquivos sass em css
//Usando o * estamos selecionando todos os arquivos SASS >> SCSS << '.source/style/*.scss'.
//pipe -- Vai encadear as funções, sem ele não poderiamos chamar outra função depois do gulp.src
function compilaSass() {
   // return gulp.src('./source/styles/*.scss')
   // nesse caso não é necessário compilar tododos os arquivos então colocaremos apenas o Gulp.
    return gulp.src('./source/styles/main.scss')
    
        .pipe(sourcemaps.init())

        //Vamos dizer que o Gulp além de compilar ele precisa MINIFICAR o arq.
        // DESSE :.pipe(sass()) PASSA PARA:
        .pipe(sass({
            outputStyle: 'compressed' //esse código vai remover toda quebra de linha.
        }))
        //Aqui colocaremos mais um pipe para ele criar um doc. de mapeameto.
        //Essa pasta já sera criada ao lado main.css por isso não precisamos colocar todo o caminho.
        .pipe(sourcemaps.write('./maps'))
        //Essa função irá mandar toda a compilação para os destino final.
        .pipe(gulp.dest('./build/styles'));
    }
    
    
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
exports.sass = compilaSass;

exports.watch = function() {
    gulp.watch('./source/styles/*.scss', { ignoredInitial: false }, gulp.series(compilaSass));
}

exports.javascript = comprimeJs;

exports.imagemin = comprimeImagen;



