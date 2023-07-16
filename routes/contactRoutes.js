const express = require("express");
const router = express.Router();
const { getContacts,
    CreateContact, 
    getContact, 
    updateContact, 
    deleteContact } = require("../controllers/contactControllers");

router.route("/").get(getContacts).post(CreateContact);
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;