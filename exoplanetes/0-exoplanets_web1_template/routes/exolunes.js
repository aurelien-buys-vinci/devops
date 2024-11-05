const express = require('express');
const router = express.Router();

const Exolune = require("../models/Exolune");

router.get('/', (req, res) => {
    console.log("tu passe par la route /exolunes");
    res.render('exolunes/index.hbs', {exolunes: Exolune.exolunes});
});

module.exports = router;