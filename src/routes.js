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

const router = new Router();

// router.use('/characters', characters.routes());
router.use("/users", users.routes());
router.use("/start", start.routes());
router.use("/draft", draft.routes());
router.use("/attack", attack.routes());
router.use("/fortify", fortify.routes());
router.use("/games", games.routes());
router.use("/players", players.routes());
router.use("/territories", territories.routes());

module.exports = router;