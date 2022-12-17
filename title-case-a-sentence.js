function titleCase(str) {
  var strArray = str.toLowerCase().split(" ");

  for (let index = 0; index < strArray.length; index++) {
    strArray[index] = strArray[index].replace(
      strArray[index].slice(0, 1),
      strArray[index].slice(0, 1).toUpperCase()
    );
  }
  console.log(strArray.join(" "));
  return strArray.join(" ");
}

titleCase("I'm a little tea pot");
