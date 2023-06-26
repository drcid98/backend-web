const Router = require("koa-router");

const router = new Router();


// Creamos nuevo game
router.post("games.create","/",async(ctx)=>{
  try{
    const game = await ctx.orm.Game.create(ctx.request.body);

    await game.save();

    const territories = [];

    for (let i = 0; i < 20; i++) {
      territories.push(ctx.orm.Territory.create({ player_id: null, game_id: game.id, troops: null }));
    }

    const createdTerritories = await Promise.all(territories);


    ctx.body = {game,
                createdTerritories};
    ctx.status = 201;
  } catch(error){
    ctx.body = { error: error.message };
    ctx.status = 400;
  }
});


// Mostramos lista de partidas actuales
router.get("games.list","/",async(ctx)=>{
  try{
    const games = await ctx.orm.Game.findAll();
    ctx.body = games;
    ctx.status = 200;
  } catch(error){
    ctx.body = { error: error.message };
    ctx.status = 400;
  }
});

// Mostramos partida en específico
router.get("games.show","/:id",async(ctx)=>{
  try{
    const game = await ctx.orm.Game.findOne({where:{id:ctx.params.id}});
    ctx.body = game;
    ctx.status = 200;
  } catch(error){
    ctx.body = { error: error.message };
    ctx.status = 400;
  }
});



module.exports = router;