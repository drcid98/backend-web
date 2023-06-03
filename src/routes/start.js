const Router = require('koa-router');

const router = new Router();

// GET para iniciar una partida
router.get("/:id", async(ctx)=>{
    // Se retorna game, la lista de territorios y la lista de usuarios
    try{
        const game = await ctx.orm.Game.findOne({where:{id:ctx.params.id}});
        const territories = await ctx.orm.Territory.findAll({where:{game_id:ctx.params.id}});
        const players = await ctx.orm.Player.findAll({where:{game_id:ctx.params.id}});

        ctx.body = {
            game,
            territories,
            players
        };
        ctx.status = 200;
    } catch(error){
        ctx.body = error;
        ctx.status = 400;
    }
})


module.exports = router;