const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  console.log("tu passe par la route /");
  const dateNow = new Date();
  const date = "Nous sommes le " + dateNow.getDate() + "/"+ dateNow.getMonth() + 1 +"/"+dateNow.getFullYear()+". Il est "+dateNow.getHours()+":"+dateNow.getMinutes()+" à Bruxelles.";
  console.log(date);
  res.render('index.hbs', {date});

});

router.get('/telescopes', (req, res) => {
  console.log("tu passe par la route /telescopes");
  const telescopes = [];
  const gran = {name : "Gran Telescopio Canarias", pays : "Espagne", diametre : "10.4"};
  const keck = {name : "Keck 1", pays : "Etats-Unis", diametre : "9.8"};
  const seimei = {name : "Seimei", pays : "Japon", diametre : "3.8"};
  telescopes.push(gran,keck, seimei);
  let message = "";
  if (telescopes.length < 3){
    message = "Il faut au minimum 3 téléscopes dans le tableau";
  };
  res.render('telescopes.hbs', {telescopes, message});
});
router.get('/films', (req, res) => {
  console.log("tu passes par la route /films");
  const films = [];
  const interstellar = {name : "Interstellar", realisateur : "Christopher Nolan", duree : "169"};
  const trek = {name : "Start Trek", realisateur : "J. J. Abrams", duree : "127"};
  const avatar = {name : "Avatar", realisateur : "James Cameron", duree : "162"};
  films.push(interstellar, trek, avatar);
  res.render('films.hbs', {films});
});

module.exports = router;
