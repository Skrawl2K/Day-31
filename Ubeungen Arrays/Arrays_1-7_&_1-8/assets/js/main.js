//Uebung_1-7

const deutscheGerichte = ["Speckkuchen", "Thüringer Rostbratwurst", "Quarkkeulchen", "Sauerbraten"];

deutscheGerichte.unshift("Haxe", "Rollbraten", "Himmel & Äd", "Bratkartoffeln mit parnierten Schnitzel", "Hackbraten")
console.log(deutscheGerichte);

console.log(deutscheGerichte[0]);
console.log(deutscheGerichte[1]);
console.log(deutscheGerichte[2]);
console.log(deutscheGerichte[3]);
console.log(deutscheGerichte[4]);
console.log(deutscheGerichte[5]);
console.log(deutscheGerichte[6]);
console.log(deutscheGerichte[7]);
console.log(deutscheGerichte[8]);
console.log("length:", deutscheGerichte.length);

//Uebung_1-8

const nichtGut = deutscheGerichte;
deutscheGerichte.shift().concat(deutscheGerichte.shift().concat(deutscheGerichte.shift()));


console.log(nichtGut);

