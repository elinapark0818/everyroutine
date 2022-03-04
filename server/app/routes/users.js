const router = require("express").Router();
const controller = require("../controllers/users");

// GET /items Router와 Controller를 연결합니다.
router.get("/", controller.users.get);
// router.post("/", controller.users.post);

module.exports = router;