const Router = require("koa-router");

const router = new Router();

// router.post("users.create","/",async(ctx)=>{
//   try{
//     const user = await ctx.orm.User.create(ctx.request.body);

//     await user.save();

//     ctx.body = user;
//     ctx.status = 201;
//   } catch(error){
//     ctx.body = { error: error.message };
//     ctx.status = 400;
//   }
// });

router.get("users.list","/",async(ctx)=>{
  try{
    const users = await ctx.orm.User.findAll();
    ctx.body = users;
    ctx.status = 200;
  } catch(error){
    ctx.body = { error: error.message };
    ctx.status = 400;
  }
});

router.get("users.show","/:id",async(ctx)=>{
  try{
    const user = await ctx.orm.User.findOne({where:{id:ctx.params.id}});
    ctx.body = user;
    ctx.status = 200;
  } catch(error){
    ctx.body = { error: error.message };
    ctx.status = 400;
  }
});



module.exports = router;