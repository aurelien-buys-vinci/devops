const express = require('express');
const router = express.Router();

const Exoplanet = require("../models/Exoplanet");
const validator = require('validator');

const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images');
    },
    filename: function (req, file, cb) {
        const date = new Date();
        const uniquePrefix = date.getFullYear() + '-' + (date.getMonth() + 1) + 
        '-' + date.getDate() + '-' + date.getHours() + '-' + date.getMinutes() + 
        '-' + date.getSeconds();
        cb(null, uniquePrefix + '-' + file.originalname);
    }
});
const upload = multer({ storage: storage });

router.get('/', (req, res) => {
    console.log("tu passes par la route /exoplanets");
    res.render('exoplanets/index.hbs', {exoplanetes : Exoplanet.exoplanetes(), error : req.query.error});
  });

router.post('/addexoplanete',upload.single('image_exoplanete') ,(req, res) =>{
    console.log("tu passes par la route /addexoplanete");
    if (!validator.isLength(req.body.uniqueName,{min : 3, max : 100})) {
      res.redirect("/exoplanets?error=Le nom d'une exoplanète doit faire entre 3 et 100 caractères");
    }
    Exoplanet.addexoplanetes(req.body.uniqueName,req.body.hClass,req.body.discoveryYear, (req.file.filename));
    res.redirect("/exoplanets");
});

router.get('/searchexoplanet', (req, res) =>{
    console.log("tu passes par la route /exoplanets/searchexoplanet");
    const schearchdo = true;
    let error1 = true;
    const recherche = req.query.nomexo;
    let resultatRechere = [];
    if(recherche.length >= 3){
      const rechercheLike = recherche + '%';
      resultatRechere = Exoplanet.schearch(rechercheLike);
    } 
    else {
      error1 = false;
    }
    
    res.render("exoplanets/index.hbs", {exoplanetes : resultatRechere, error1, schearchdo});
});

function handleDetailsRoute(req, res){
    console.log("tu passes par la route /exoplanets/details");
    let error = false;
    let exoplanet =[];
    const id = parseInt(req.query.id);
    if(isNaN(id)){
       error = true;
    } 
    else if(id > 0){  
      exoplanet = Exoplanet.findByID(id);
    }
    res.render('exoplanets/details.hbs', {error,exoplanet});
}
  
router.get('/details', handleDetailsRoute);

router.get('/filtres', (req, res) => {
    console.log("tu passes par la route /exoplanets/filtres");
    const filtre = req.query.filtre;
    let exoplanetsfiltre = null;
    if(filtre === "Filtrer par hclass"){
      exoplanetsfiltre = Exoplanet.filtreshclass(req.query.hClass);
    }
    else{
      exoplanetsfiltre = Exoplanet.filtreyear(req.query.discoveryYear);
    }
    res.render('exoplanets/index.hbs', {exoplanetes: exoplanetsfiltre});
});

router.get("/updateview", (req, res) =>{
  console.log("tu passes par la route /exoplanets/updateview");
  if(req.session.connecter){
    const exoplanet = Exoplanet.findByID(req.query.id);
    res.render('exoplanets/update.hbs', {exoplanet});
  }
  else{
    res.redirect('/users');
  }
});

router.post("/update", (req, res) => {
  console.log("tu passes par la route /exoplanets/update");
  const r = req.body;
  Exoplanet.update(r.id,r.uniqueName,r.hClass,r.discoveryYear,r.ist,r.pClass);
  res.redirect("/exoplanets");
});
router.post("/delete", (req,res)=>{
  console.log("tu passes par la route /exoplanets/delete");
  if(req.session.connecter){
    Exoplanet.delete(req.body.id);
    res.redirect("/exoplanets");
  }
  else{
    res.redirect("/users");
  }
});
module.exports = router;