const listmess = [];
let id = 0;


module.exports.listmess = () => {
    return listmess;
};

module.exports.addmess = (texte,auteurr) => {
    const nombrelike = 0;
    const message = {id : id = id+1,message : texte, auteur : auteurr, nblike : nombrelike};
    listmess.push(message);
};

module.exports.augmenterlike = (idmessage) => {
    listmess[idmessage-1].nblike = listmess[idmessage-1].nblike+1;
};