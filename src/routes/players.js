const Router = require("koa-router");

const router = new Router();

// POST para crear player??
router.post("players.create", "/", async(ctx)=>{
  // Acá se deberían modificar los territorios que le pertenecen al nuevo player
  // FALTA ESTO, PENSANDO COMO HACERLO
  // cree la ruta de territories, no sé si sirva de algo :(
  try{
    const player = await ctx.orm.Player.create(ctx.request.body);

    await player.save();

    // OJO: LO PODRíA CREAR ACá MISMO CON ESTE CODIGO
    // const territories = await Promise.all([
    //   ctx.orm.Territory.create({player_id: player.id, game_id : 1, troops: 5}),
    //   ctx.orm.Territory.create({player_id: player.id, game_id : 1, troops: 5}),
    // ]);


    ctx.body = player;
    ctx.status = 201;
  } catch(error){
    ctx.body = { error: error.message };
    ctx.status = 400;
  }
});


router.get("players.list","/",async(ctx)=>{
  try{
    const players = await ctx.orm.Player.findAll();
    ctx.body = players;
    ctx.status = 200;
  } catch(error){
    ctx.body = { error: error.message };
    ctx.status = 400;
  }
});


module.exports = router;