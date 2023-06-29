const Router = require('koa-router')
const authUtils = require('../lib/auth/jwt')


const router = new Router();

router.get('/protecteduser', authUtils.isUser, async (ctx) => {
    const user = await ctx.orm.User.findOne({where:{id:ctx.state.user.sub}});
    ctx.body = {
        message: "Bienvenido a la ruta protegida con el scope user!", user: ctx.state.user,
        username: user.username, userID: user.id
    }
    console.log(user.username);
});

// router.get('/protectedadmin', authUtils.isAdmin, async (ctx) => {
//     ctx.body = {
//         message: "Bienvenido a la ruta protegida con el scope admin!", user: ctx.state.user
//     }
// });

module.exports = router;