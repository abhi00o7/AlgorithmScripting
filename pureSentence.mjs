// input you'll get a sentence
// print all the letters so none is repeated

let str = `this is my favorite car in the whole world.`

function uniqueLetter(str) {
  let noRepeatStr = "";

  for (let i = 0; i < str.length; i++) {
    if (noRepeatStr.indexOf(str[i]) === -1) {
      noRepeatStr += str[i];
    }
  }
  return noRepeatStr
}

console.log(uniqueLetter(str))