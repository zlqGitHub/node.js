let express = require("express");
let router = express.Router();

router.get("/",(req,res,next) => {
  res.render("index",{"title":"小张聊天室","name":"小张陪你聊"});
});

module.exports = router;
