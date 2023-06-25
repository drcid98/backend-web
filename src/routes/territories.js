const Router = require("koa-router");

const router = new Router();

// POST para crear territorios para la partida creada
router.post("territories.create", "/", async(ctx)=>{
  try{
    const territory = await ctx.orm.Territory.create(ctx.request.body);

    await territory.save();

    ctx.body = territory;
    ctx.status = 201;
  } catch(error){
    ctx.body = { error: error.message };
    ctx.status = 400;
  }
});


module.exports = router;