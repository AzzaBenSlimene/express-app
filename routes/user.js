const express = require("express");
const router = express.Router();
// controller
const userController = require("../controllers/user");

// GET Router
router
  .get("/", userController.getAll)
  .get("/:id", userController.getById)
  .post("/", userController.createUser)
  .put("/:id", userController.createUser)
  .delete("/:id", userController.createUser);

module.exports = router;
