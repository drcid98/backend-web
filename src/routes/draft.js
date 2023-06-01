const Router = require('koa-router');

const router = new Router();


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
        const territory = await ctx.orm.Territory.findOne({where:{id:ctx.request.body.territory_id}});
        // acá podríamos crear una variable global para no tener que volver a calcular la cantidad, pero no sé:(
        var troops = parseInt(player.troops / player.territories);
        player.troops += troops;
        territory.troops += troops;
        ctx.body = territory;
        // acá tengo la duda si deberíamos dejar status 201, ya que en teoría no se creó un recurso, sino que se actualizó
        ctx.status = 201;
    } catch(error){
        ctx.body = error;
        ctx.status = 400;
    }
})


// Me falta que el servidor envíe los cambios a todos los jugadores. Aun que ya cambié la bdd pero 
// debemos enviar alguna señal para que los demás jugadores se actualicen
module.exports = router;