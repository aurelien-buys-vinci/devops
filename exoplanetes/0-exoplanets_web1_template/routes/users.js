const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const saltRounds = 10;

const User = require("../models/User.js");
const validator = require('validator');


router.get('/', (req, res) => {
    console.log("tu passes par la route /users");
    res.render('users/index.hbs');
    
  });

router.get("/login", (req, res) => {
    console.log("tu passes par la route /users/login");
    const user = User.login(req.query.loginMember, req.query.password);
    if(user === "email"){
        req.session.error1 = "Utilisateur inconu";
        res.redirect("/users");
    }
    else if(user === "password"){
        req.session.error1 = "Mot de passe inconu";
        res.redirect("/users");
    }
    else if(user === "inactif"){
        req.session.error1 = "Utilisateur incatif";
        res.redirect("/users");
    }
    else{
        req.session.connecter = true;
        req.session.login = user;
        res.redirect("/users/members");
    };
});
router.get("/members", (req, res) => {
    console.log("tu passes par la route /users/members");
    res.render("users/members.hbs");
});
router.get("/logout", (req, res) => {
    console.log("tu passes par la route /users/logout");
    req.session.destroy();
    res.redirect("/users");
});
router.get("/register", (req, res) => {
    console.log("tu passes par la route /users/register");
    console.log(req.session.errors);
    res.render("users/register.hbs" , {errors : req.session.errors});
    req.session.errors = null;
});
router.post("/add", (req, res) => {
    console.log("tu passes par la route /users/add");
    const recu = req.body;
    req.session.errors = [];
    if(!validator.isLength(recu.nom,{min : 3})){
        req.session.errors.push("Le nom doit avoir 3 caractères au minimum");
    }
    if(!validator.isLength(recu.prenom,{min : 3})){
        req.session.errors.push("Le prénom doit avoir 3 caractères au minimum");
    }
    if (!validator.isAlphanumeric(recu.nom)) {
        req.session.errors.push("Le nom doit contenir uniquement des caractères alphanumériques");
    }
    if (!validator.isAlphanumeric(recu.prenom)) {
        req.session.errors.push("Le prénom doit contenir uniquement des caractères alphanumériques");
    }
    if (!validator.isEmail(recu.email)) {
        req.session.errors.push("L’email doit être un email correct");
    }
    if(!validator.isLength(recu.password,{min : 2})){
        req.session.errors.push("Le mot de passe doit être un mot de passe fort (min 2 caractères");
    }
    if (req.session.errors != 0) {
        res.redirect("/users/register");        
    } else {
        const encryptedData = bcrypt.hashSync(recu.password, saltRounds);
        User.adduser(recu.nom,recu.prenom,recu.email,encryptedData);
        res.redirect("/users");
    }
    
});
module.exports = router;