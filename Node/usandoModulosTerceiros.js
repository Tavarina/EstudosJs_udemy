const _ = require('lodash') // comum usar o _ para referenciar a biblioteca lodash
setInterval(() => console.log(_.random(500, 1000)), 2000)

// nodemon usandoModulosTerceiros.js ---> o comando nodemon fará com que rode a sequencia de números aleatórios no terminal.
//rs ele reflesh

//Etapas
/* Após instalar o npm i lodash 
* instalamos o npm i -g nodemon
* entramos na pasta que vamos executar o projeto. Nesse caso cd node
* e digitamos  nodemon usandoModulosTerceiros.js (no caso o nodemon com o nome do arquivo que vamos rodar.)*/

