const express = require("express");
const loansController = require("../controllers/loans.controller");
const router = express.Router();

router.get("/", loansController.loansMember);
router.post("/", loansController.loanBook);
router.patch("/", loansController.returnBook);

// router.put("/books/:id", bookstoreController.modifyBook);
// router.delete("/books/:id", bookstoreController.removeBook);

module.exports = router;