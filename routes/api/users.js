const router = require("express").Router();
const userController = require("../../controllers/userController");

router.route("/")
.post(userController.create);

router.route("/:username")
.get(userController.findByUsername);

router.route("/:id")
.get(userController.findById)
.delete(userController.remove)
.put(userController.update);

module.exports = router;