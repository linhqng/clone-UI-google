var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Google" });
});

router.post("/", function (req, res) {
  res.render("index", { data: req.body.key_word });
});
module.exports = router;
