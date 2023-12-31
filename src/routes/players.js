const Router = require("koa-router");

const router = new Router();

// POST para crear player
router.post("players.create", "/", async (ctx) => {
  try {
    const player = await ctx.orm.Player.create(ctx.request.body);

    await player.save();

    const territories = await ctx.orm.Territory.findAll({ where: { game_id: player.game_id, player_id: null } });

    const game = await ctx.orm.Game.findOne({ where: { id: player.game_id} });
    if (game.num_players === 4){
      throw new Error("La partida está llena. No se pueden agregar más jugadores.");
    }

    game.num_players += 1;

    await game.save();

    var available_troops = player.troops - 6;

    
    var selected_territories = [];
    for (let i = 0; i < 6; i++) {
      const available_territories = territories.length;
      const min = 0;
      const max = available_territories;
      const selected_territory = Math.floor(Math.random() * (max - min) + min);

      territories[selected_territory].player_id = player.id;
      selected_territories.push(territories[selected_territory]);

      territories[selected_territory].troops = 1;
      await territories[selected_territory].save(); // Guardar el cambio en la entidad Territory

      territories.splice(selected_territory, 1);
    }

    while (available_troops > 0) {
      const territorioAleatorio = Math.floor(Math.random() * selected_territories.length);
      selected_territories[territorioAleatorio].troops++;
      available_troops--;
      await selected_territories[territorioAleatorio].save(); // Guardar el cambio en la entidad Territory
    }

    ctx.body = {
      player,
      selected_territories,
    };
    ctx.status = 201;
  
  } catch (error) {
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