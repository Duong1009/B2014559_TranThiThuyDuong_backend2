const express = require("express");
const contacts = require("../controllers/contact.controller");
const router = express.Router();

router.route("/").get(contacts.findAll);
router.route("/").post(contacts.create);
router.route("/").delete(contacts.deleteAll);

router.route("/favorite").get(contacts.findAllFavorite);

router.route("/:id").get(contacts.findOne);
router.route("/:id").put(contacts.update);
router.route("/:id").delete(contacts.delete);

module.exports = router;