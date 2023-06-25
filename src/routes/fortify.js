const Router = require("koa-router");

const router = new Router();


router.post("/",async(ctx) => {
  // Esta es la fase en que se cambian las tropas de territorios
  // POST que obtiene el id de territorio origen y destino
  // oobtiene la cantidad de tropas
  try {
    const player = await ctx.orm.Player.findOne({where:{id:ctx.request.body.player_id}});
    const source_territory = await ctx.orm.Territory.findOne({where:{id:ctx.request.body.source_territory_id}});
    const dest_territory = await ctx.orm.Territory.findOne({where:{id:ctx.request.body.dest_territory_id}});
    const moving_troops = await ctx.request.body.moving_troops;

    dest_territory.troops += moving_troops;
    source_territory.troops -= moving_troops;

    await dest_territory.save();
    await source_territory.save();
    await player.save();

    ctx.body = {player, dest_territory, source_territory};

    // misma duda si deberíamos dejar status 201, ya que en teoría no se creó un recurso, sino que se actualizó
    ctx.status = 201;
  } catch(error) {
    ctx.body = { error: error.message };
    ctx.status = 400;
  }
});


module.exports = router;