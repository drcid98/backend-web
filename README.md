# grupo-SupremaciaBoris-backend

*Dependencias:*

Para poder correr nuestra aplicación, será necesario installar, con los siguientes comandos, las dependencias de la API:
- yarn add koa
- yarn add koa-router
- yarn add sequelize
- yarn add sequelize-cli

*Base de datos:*

Para poblar la base de datos, partimos por limpiar lo que pueda haber para evitar problemas:
- yarn sequelize-cli db:migrate:undo:all
Luego, seguimos con los siguientes 2 comandos que migrarán y poblarán la bdd:
- yarn sequelize-cli db:seed:all                      
- yarn sequelize-cli db:migrate                       


*Sobre la API:*

La API cuenta con los siguientes endpoints:
- /attack/      :   Se espera un POST request con al menos los siguientes parametros en el body del request:
    - `player_id`       : El id del jugador que envia la request.
    - `attacking_id`    : El id del territorio atacante.
    - `attacked_id`     : El id del territorio atacado.
- /drafts/      :   Se espera un POST request con al menos los siguientes parametros en el body del request:
    - `player_id`       : El id del jugador que envia la request.
    - `territory_id`    : El id del territorio en donde el jugador recibira las tropas.
- /drafts/:id   :   Se espera un GET request del jugador que quiere saber cuantas tropas puede obtener en su fase draft. :id es el id del jugador.
- /fortify/:id  :
- /start/:id    :
- /users/       :