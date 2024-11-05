const express = require('express');
const router = express.Router();

const Forum = require("../models/Forum");

router.get('/', (req, res) => {
    console.log("tu passes par la route /forum");
    res.render('forum/index.hbs', {listmess:Forum.listmess});
});
  
router.post('/addmess', (req, res)=>{
    console.log("tu passes par la route /forum/addmess");
    Forum.addmess(req.body.message, req.body.auteur);
    res.redirect("/forum");
});

router.get("/like", (req, res) => {
    console.log("tu passes par la route /forum/like");
    console.log(req.query.id);
    Forum.augmenterlike(req.query.id);
    res.redirect("/forum");
});

module.exports = router;