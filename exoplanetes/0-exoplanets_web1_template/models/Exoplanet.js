
const db = require('../models/db_conf.js'); 


module.exports.exoplanetes = () => {
  const exoplanetes = db.prepare("SELECT exoplanet_id AS id, unique_name AS uniqueName, hclass AS hClass, discovery_year AS discoveryYear, ist, pclass AS pClass, image_file FROM exoplanets;");
  return exoplanetes.all();
};

module.exports.addexoplanetes = (uniqueName,hClass,discoveryYear,image_file) => {
  const stmt = db.prepare('INSERT INTO exoplanets (unique_name, hclass, discovery_year, image_file) VALUES (?, ?, ?, ?);');
  const info = stmt.run(uniqueName,hClass,discoveryYear,image_file);
  console.log("users model save" + info.changes);
};
module.exports.schearch = (recherche) => {
    const stmt = db.prepare('SELECT exoplanet_id AS id, unique_name AS uniqueName, hclass AS hClass, discovery_year AS discoveryYear, ist, pclass AS pClass FROM exoplanets WHERE lower(unique_name) LIKE lower(?);');
    return stmt.all(recherche);
};
module.exports.findByID = (id) => {
  const stmt = db.prepare('SELECT exoplanet_id AS id, unique_name AS uniqueName, hclass AS hClass, discovery_year AS discoveryYear, ist, pclass AS pClass FROM exoplanets WHERE exoplanet_id = ?;');
  return stmt.get(id);
}; 
module.exports.filtreshclass = (hclass) => {
  const stmt = db.prepare('SELECT exoplanet_id AS id, unique_name AS uniqueName, hclass AS hClass, discovery_year AS discoveryYear, ist, pclass AS pClass FROM exoplanets WHERE hclass = ?;');
  return stmt.all(hclass);
};
module.exports.filtreyear = (discoveryYear) => {
  const stmt = db.prepare('SELECT exoplanet_id AS id, unique_name AS uniqueName, hclass AS hClass, discovery_year AS discoveryYear, ist, pclass AS pClass FROM exoplanets WHERE discovery_year = ?;');
  return stmt.all(discoveryYear);
};
module.exports.update =  (id,uniqueName,hClass,discoveryYear,ist,pClass) => {
    const stmt = db.prepare('UPDATE exoplanets SET unique_name=?, hclass=?, discovery_year=?, ist=?, pclass=? WHERE exoplanet_id=?');
    stmt.run(uniqueName,hClass,discoveryYear,ist,pClass,id);
};
module.exports.delete = (id) => {
    const stmt = db.prepare('DELETE FROM exoplanets WHERE exoplanet_id = ?;');
    stmt.run(id);
};
