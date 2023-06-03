# grupo-SupremaciaBoris-backend

*Dependencias:*

Para poder correr nuestra aplicación, será necesario installar, con los siguientes comandos, las dependencias de la API:
- yarn add koa
- yarn add koa-router
- yarn add sequelize
- yarn add sequelize-cli

*Base de datos:*
Antes de comenzar, es importante que postgresql esté instalado y se haya comenzado su servicio.
Para poblar la base de datos, partimos por limpiar lo que pueda haber para evitar problemas:
- yarn sequelize-cli db:migrate:undo:all
Luego, seguimos con los siguientes 2 comandos que migrarán y poblarán la bdd:
- yarn sequelize-cli db:migrate
- yarn sequelize-cli db:seed:all
Una vez ejecutados estos comandos, nuestra base de datos está lista para ser usada.

*Sobre la API:*

La API cuenta con los siguientes endpoints:
- /attack/      :   Se espera un POST request con al menos los siguientes parametros en el body del request:
    - `player_id`       : El id del jugador que envia la request.
    - `attacking_id`    : El id del territorio atacante.
    - `attacked_id`     : El id del territorio atacado.
Este endpoint sirve para manejar la logica tras la fase de ataque del juego, en donde se asigna una probabilidad de ganar al jugador atacante 
que depende de la proporción entre sus tropas y las del otro jugador.
- /drafts/      :   Se espera un POST request con al menos los siguientes parametros en el body del request:
    - `player_id`       : El id del jugador que envia la request.
    - `territory_id`    : El id del territorio en donde el jugador recibira las tropas.
Este endpoint sirve para la fase en donde se le entregan tropas al jugador al comienzo de su turno. En este caso, se le asignan las tropas al jugador correspondiente.
- /drafts/:id   :   Se espera un GET request del jugador que quiere saber cuantas tropas puede obtener en su fase draft. :id es el id del jugador. En este caso, se calculan 
cuantas tropas se le asignarán al jugador, pero no se entregan.
- /fortify/     :   Se espera un POST request con al menos los siguientes parámetros en el body:    
    - `player_id`           : El id del jugador que envía la request.
    - `source_territory_id` : El id del territorio de donde "saldrán" las tropas.
    - `dest_territory_id`   : El id del territorio a donde llegarán las tropas.
Este endpoint maneja la lógica de la fase en donde se pueden mover tropas de un territorio dominado a otro.
- /start/:id    :   Se espera un GET request del jugador cuyo turno va a comenzar (o al comenzar la partida). Este sirve para actualizar al jugador con toda la info del juego, 
incluido la información de tropas, territorios, etc.
- /users/users.create   : Se espera un POST request. Este endpoint sirve para crear un usuario.
- /users/users.list     : Se espera un POST request. Este endpoint sirve obtener un listado de los usuarios.
- /users/user.show      : Se espera un POST request. Este endpoint sirve para encontrar un usuario a partir de su id.