const express = require('express');
const router = express.Router();

const User = require("../models/User.js");

router.get("/", (req,res) => {
    console.log("tu passes par la route /admin");
    
    if(req.session.connecter){
        if(req.session.login.admin === 1){
            res.render("admin/index.hbs", {users : User.users});
        } 
        else {
            res.redirect("/users/members");
        }
    }
    else {
        res.redirect("/users");
    }
});

router.post("/deactivate", (req,res) => {
    console.log("tu passes par la route /admin/deactivate");
    User.deactivate(req.body.id);
    res.redirect("/admin");
});
router.post("/activate", (req,res) => {
    console.log("tu passes par la route /admin/activate");
    User.activate(req.body.id);
    res.redirect("/admin");
});


module.exports = router;