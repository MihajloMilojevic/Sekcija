import skola from "./Primer5.json";

const skolaString = JSON.stringify(skola);

console.log(skola);

const skolaObjekat = JSON.parse(skolaString);

console.log(skolaObjekat);