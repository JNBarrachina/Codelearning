const express = require("express");
const membersController = require("../controllers/members.controller");
const router = express.Router();

router.post("/", membersController.addMember);

// router.put("/books/:id", bookstoreController.modifyBook);
// router.delete("/books/:id", bookstoreController.removeBook);

module.exports = router;