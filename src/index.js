const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  // write your solution here
  let sectionLong = 10;
  let array = [];

  for (let i = 0; i < expr.length; i += sectionLong) {
    array.push(expr.slice(i, i + sectionLong)); // разбил по 10 символов
  }

  let arrayWhitoutZiro = array.toString().replace(/00/gi, ""); // Убрал нули

  let arrayChangeTen = arrayWhitoutZiro.replace(/10/gi, "."); // заменил 10

  let arrayChangeEleven = arrayChangeTen.replace(/11/gi, "-"); // заменил 11

  let stringLikeMorse = arrayChangeEleven
    .replace(/[**********]/gi, " ")
    .replace(/          /gi, " "); // заменил пробелы

  let arrayLikeMorse = stringLikeMorse.split(","); // сделал из строки массив

  let resultArray = "";

  for (let simbol of arrayLikeMorse) {
    resultArray = resultArray + MORSE_TABLE[simbol];
  } // работает но с undefind  вместо пробела

  let result = resultArray.replace(/undefined/gi, " ").toString(); // убрал undefined и преобразовал в строку

  //   for (j = 0; j <= arrayLikeMorse.length; j++) {

  //   }

  return result;
}

module.exports = {
  decode,
};
