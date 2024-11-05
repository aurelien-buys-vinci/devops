const exolunes = [];
const DH = {name : "DH Tauri"};
const Kelper = {name : "Kelper-409"};
const WASP = {name : "WASP-49"};
exolunes.push(DH,Kelper,WASP);

module.exports.exolunes = () => {
    return exolunes;
};