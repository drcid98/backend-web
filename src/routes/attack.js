const Router = require("koa-router");

const router = new Router();


// en attack, a diferencia de draft se hace primero el post para especificar el territorio a atacar
// y luego el get para obtener los resultados


router.post("/",async(ctx)=>{
  // el jugador en turno envía su jugada.
  try {
    const attacking_player = await ctx.orm.Player.findOne({where:{id:ctx.request.body.player_id}});
    const attacking_territory = await ctx.orm.Territory.findOne({where:{id:ctx.request.body.attacking_id}});
    const attacked_territory = await ctx.orm.Territory.findOne({where:{id:ctx.request.body.attacked_id}});
    const defending_player = await ctx.orm.Player.findOne({where:{id:attacked_territory.player_id}});


    const game = await ctx.orm.Game.findOne({where:{id:attacking_player.game_id}});

    if (attacking_territory.player_id !== attacking_player.id) {
      throw new Error("No puedes atacar desde un territorio que no te pertenece");
    }

    if (attacked_territory.player_id === attacking_player.id) {
      throw new Error("No puedes atacar un territorio que te pertenece");
    }

    game.stage += 1;
    // acá podríamos crear una variable global para no tener que volver a calcular la cantidad, pero no sé:(
    // var result = attacked_territory.troops > attacking_territory.troops;
    var proportion = attacking_territory.troops / (attacked_territory.troops + attacking_territory.troops);
    const random = Math.random();

    

    // Se hace una proporcion y si un numero es menor que esta, el atacante gana. Se mandan por defecto
    // 2 tropas a la conquista. Esto no es así en el juego real, pero para hacer que el atacante decida
    // debemos hacer otro post. Me parece mejor dejarlo para después

    // DUDA: Por que el player tiene asociado un territorio en plater.js? no deberia ser solo que el territorio tenga asociado un player? 
    // Esto va a generar problemas porque no se como "quitarle" el territorio al player una vez que lo perdio ya que habiamos quedado en no
    // trabajarlos como una lista o array
    if (random < proportion && proportion >= 0.5){
      attacking_territory.troops -= 2;
      attacked_territory.troops = 2;

      // El atacado pierde la cantidad de tropas que tenia en el territorio
      defending_player.troops -= attacked_territory.troops;
      defending_player.territories -= 1;
            
      // El territorio pasa a ser del player atacante
      attacked_territory.player_id = attacking_player.id;

      attacking_player.territories += 1;
    }
    else {
      // en caso de que el atacante pierda quedan sus tropas en 1
      attacking_player.troops -= (attacking_territory.troops - 1);
      attacking_territory.troops = 1;

    }

    await attacking_territory.save();
    await attacked_territory.save();
    await defending_player.save();
    await attacking_player.save();
    await game.save();

    ctx.body = {attacking_player, defending_player, attacked_territory, attacking_territory};
    // lo mismo: tengo la duda si deberíamos dejar status 201, ya que en teoría no se creó un recurso, sino que se actualizó
    ctx.status = 201;
  } catch(error){
    ctx.body = { error: error.message };
    ctx.status = 400;
  }
});

module.exports = router;