const Router = require("koa-router");
// const characters = require('./routes/characters.js');
const users = require("./routes/users.js");
const start = require("./routes/start.js");
const draft = require("./routes/draft.js");
const attack = require("./routes/attack.js");
const fortify = require("./routes/fortify.js");
const games = require("./routes/games.js");
const players = require("./routes/players.js");
const territories = require("./routes/territories.js");
const authRoutes = require('./routes/authentication.js')
const dotenv = require('dotenv');
const jwtMiddleware = require('koa-jwt')
const scopeProtectedRoutes = require('./routes/scopeExample.js')

dotenv.config();

const router = new Router();


router.use("/start", start.routes());
router.use("/draft", draft.routes());
router.use("/attack", attack.routes());
router.use("/fortify", fortify.routes());
router.use("/games", games.routes());
router.use("/players", players.routes());
router.use("/territories", territories.routes());

router.use(authRoutes.routes());


// Desde esta línea, todas las rutas requieriran un JWT. Esto no aplica para
// las líneas anteriores
router.use(jwtMiddleware( { secret: process.env.JWT_SECRET } ))

router.use('/users', users.routes());

router.use('/scope-example', scopeProtectedRoutes.routes())

module.exports = router;