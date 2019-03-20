const express = require("express");
const userController = require("../controllers/add-friend");
const signup = require("../controllers/signup");
const router = express.Router();

router.put("/:userId/addFriend", userController.addFriend);
//Router for signup
router.post("/api/users/signup", signup);

module.exports = router;
