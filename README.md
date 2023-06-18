# Gulp-Automate

No Terminal:

Instalação do Gulp:

    npm install --global gulp-cli

Navegue até a pasta do seu projeto
Inicie o Node Js

    npm init .....Peruntas ENTER

Instale uma dependencia no ambiente de Desenvolvimento

    npm install --save-dev gulp

Limpe o terminal e Abra o projeto


Crie um arquivo:
    gulpfiles.js //não deve ser comitada ela tem dependencias diferentes para cada sistam operacional

coloque a pasta gulp no .gitignore


Vamos na pasta >> package.js <<

    "scripts": {
        "gulp": "gulp",
        "test": ................................................"
    }

depois comando
    npm run gulp


Exportar os pacotes Gulp
    const gulp = require('gulp');


___________________//______________
_____PROCESSAR SASS EM CSS PELO GULP_________________________


Instalação de Plu-gins Node js...

    npm install --save-dev gulp-sass

Pacote Sass

    npm install --save-dev sass

Precisamos importar esses pacotes para o arquivo Gulp.js

linha 2

    const sass = require('gulp-sass')(require('sass'));

    ('gulp-sass') ----- responsável por integrar o sass com o Gulp.
    (require('sass')) ----- responsável por fazer toda compilação.


FUNÇÂO PARA COMPILAR____________________________________________________________________________


//Função para compilar todos arquivos sass em css
//Usando o * estamos selecionando todos os arquivos SASS >> SCSS << '.source/style/*.scss'.
//pipe --Vai encadear as funções, sem ele não poderiamos chamar outra função depois do gulp.src
    function compilaSass() {
        return gulp.src('./source/style/*.scss')
            .pipe(sass())
            //Essa função irá mandar toda a compilação para os destino final.
            .pipe(gulp.dest('./build/styles'));
        }
    
Crie os arquivos scss 
Passe o comando

    npm run gulp sass
    *** os arquivos aparecem compilados na pasta build.

________Instalação do SOURCEMAPS para tratar erros de SASS__________

    npm install --save-dev gulp-sourcemaps

Para usar esse pacote vamos importar o pacote no arq Gulp

    const sourcemaps = require('gulp-sourcemaps');

colocar antes do .pipe(sass
    .pipe(sourcemaps.init())
    )

_________________________________________________________________
//Para o Gulp ficar rodando sem ficar dando o comando npm run gul sass
Fazemos:

Colocamos uma tarefa gulp Watch

//esse código vai fazer com que sempre que houver uma alteração no doc ele atualize automaticamente.
    exports.watch = function() {
        gulp.watch('./source/styles/*.scss', gulp.series(compilaSass));
    }


em seguida rodar o comando:

    npm run gulp watch


________________________________________________________________________________________________________
Comprimindo o JS usando Gulp:
Para isso, precisaremos de plu-gin do Gulp

    npm install --save-dev gulp-uglify

importamos o pacote no arq Gulp para criamos uma nova tarefa 

    const uglify = require('gulp-uglify');


//Função para MINIMIZAR o JS.
    function comprimeJs() {
        return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/scripts'))

    }

exports.javascript = comprimeJs;

depois damos o comando para minimizar

    npm run gulp javascript


Você irá perceber que serão removidos dos seu códigos todas as quebras de linha e espaços.


____________Obfuscação:__________________________________________________________________
Dificultar a leitura

Instalar o pacote:

    npm install --save-dev gulp-obfuscate

impote o pacote no arq Gulp 

    const obfuscate = require('gulp-obfuscate');

chame a função 

    .pipe(obfuscate())

De um comando 
    
    npm run gulp javascript


____________Comprimir imagens a partir do Gulp_____________________________________________________

instalar o Plu-gin
    
    npm install --save-dev gulp-imagemin@7.1.0

importar o pacote no Gulp

    const imagemin = require('gulp-imagemin');

Cria a pasta imagens e image no Source e na Build

    npm run gulp imagemin



EX: 
[15:43:04] gulp-imagemin: Minified 6 images (saved 771 kB - 39.4%) Quase um mega só nas imagens.

____________________Github________________________________

Quando formos baixar esse arquivo do GitHub 

Daremos o comando

    npm install 

E algumas pastas do projeto serão incluidas

_____________________________________________________________________________________
