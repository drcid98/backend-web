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
- /attack/      :   
- /drafts/      :
- /drafts/:id   :
- /fortify/:id  :
- /start/:id    :
- /users/       :