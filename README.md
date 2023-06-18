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


_______________________________________________________//_______________________________________________________________
____________________________________________PROCESSAR SASS EM CSS PELO GULP_____________________________________________
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

