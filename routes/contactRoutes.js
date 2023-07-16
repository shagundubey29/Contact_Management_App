const express = require("express");
const router = express.Router();

router.route("/").get( (req, res) => {
    res.status(200).json({"msg": "Get all Contacts"});
});

router.route("/").post( (req, res) => {
    res.status(200).json({"msg": "Create Contacts"});
});

router.route("/:id").get( (req, res) => {
    res.status(200).json({msg: `Get the contacts for ${req.params.id}`});
});

router.route("/:id").put( (req, res) => {
    res.status(200).json({msg: `Update the contacts for ${req.params.id}`});
});

router.route("/:id").delete( (req, res) => {
    res.status(200).json({"msg": `Delete contact for ${req.params.id}`});
});

module.exports = router;