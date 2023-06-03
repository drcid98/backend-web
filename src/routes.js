const Router = require("koa-router");
// const characters = require('./routes/characters.js');
const users = require("./routes/users.js");
const start = require("./routes/start.js");
const draft = require("./routes/draft.js");
const attack = require("./routes/attack.js");
const fortify = require("./routes/fortify.js");

const router = new Router();

// router.use('/characters', characters.routes());
router.use("/users", users.routes());
router.use("/start", start.routes());
router.use("/draft", draft.routes());
router.use("/attack", attack.routes());
router.use("/fortify", fortify.routes());

module.exports = router;