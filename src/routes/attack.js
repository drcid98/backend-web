const Router = require('koa-router');

const router = new Router();


// en attack, a diferencia de draft se hace primero el post para especificar el territorio a atacar
// y luego el get para obtener los resultados

router.get("/:id", async (ctx) => {
    // GET para obtener tropas
    // Lo hace el jugador en turno al comenzar la fase draft
    try{
        const player = await ctx.orm.Player.findOne({where:{id:ctx.params.id}});
        // decidir fórmula para calcular la cantidad de territorios que se dan al inicio del turno
        // la que puse es lo que se me ocurrió nomás
        var troops = parseInt(player.troops / player.territories);
        ctx.body = troops;
        ctx.status = 200;
    } catch(error){
        ctx.body = error;
        ctx.status = 400;
    }
})


router.post("/",async(ctx)=>{
    // el jugador en turno envía su jugada.
    try{
        
        const player = await ctx.orm.Player.findOne({where:{id:ctx.request.body.player_id}});
        const attacking_territory = await ctx.orm.Territory.findOne({where:{id:ctx.request.body.attacking_id}});
        const attacked_territory = await ctx.orm.Territory.findOne({where:{id:ctx.request.body.attacked_id}});
        // acá podríamos crear una variable global para no tener que volver a calcular la cantidad, pero no sé:(
        var result = attacked_territory > attacking_territory;
        // acá simplemente gana quien tiene más tropas y si el que ataca gana, se mandan por defecto
        // 3 tropas a la conquista. Esto no es así en el juego real, pero para hacer que el atacante decida
        // debemos hacer otro post. Me parece mejor dejarlo para después
        if (result){
            attacking_territory.troops -= 3;
            attacked_territory.troops = 3;
            attacked_territory.player_id = player.id;
        }
        else {
            // en caso de que el atacante pierda quedan sus tropas en 1
            attacking_territory.troops = 1;

        }
        ctx.body = {attacked_territory,
                    attacking_territory};
        // lo mismo: tengo la duda si deberíamos dejar status 201, ya que en teoría no se creó un recurso, sino que se actualizó
        ctx.status = 201;
    } catch(error){
        ctx.body = error;
        ctx.status = 400;
    }
})

module.exports = router;