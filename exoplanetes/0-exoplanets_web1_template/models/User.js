const db = require('../models/db_conf.js'); 
const bcrypt = require('bcrypt');


module.exports.users = () => {
    const users = db.prepare("SELECT * FROM users;");
    return users.all();
};
  
module.exports.adduser = (nom,prenom,email,password) => {
  const stmt = db.prepare('INSERT INTO users (name, firstname, email,password) VALUES (?, ?, ?,?);');
  const info = stmt.run(nom,prenom,email,password);
  console.log("users model save" + info.changes);
};

module.exports.login = (email,password) => {
  const users = this.users();
  let error = "";
  for (const element of users) {
    if(element.email === email){
      if (bcrypt.compareSync(password, element.password)){
        console.log("dataInClear == hash, OK c'est bon");
        if(element.user_actif){
         return element;
        }
        else {
          error = "inactif";
          return error;
        }
      } 
      else {
        console.log ("dataInClear != hash, KO");
        error = "password";
        return error;
      }
    }
  }
  error = "email";
  return error;
};

module.exports.activate = (id) => {
  const stmt = db.prepare("UPDATE users SET user_actif = true WHERE user_id = ? ;");
  stmt.run(id);
};

module.exports.deactivate = (id) => {
  const stmt = db.prepare("UPDATE users SET user_actif = false WHERE user_id = ? ;");
  stmt.run(id);
};