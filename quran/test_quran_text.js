const _QURAN_TEXT = require("./DATA/quran-uthmani.js");

QURAN_TEXT = _QURAN_TEXT.split("\n");
console.log("Test accesssing array:", QURAN_TEXT[1]);

l1 = QURAN_TEXT[1].split("|");
console.log(l1[2]);

//console.log(QURAN_TEXT[0]);