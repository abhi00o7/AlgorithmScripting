// "What's in a name? that which we call a rose
// By any other name would smell as sweet.”
// -- by William Shakespeare, Romeo and Juliet

function whatIsInAName(collection, source) {
  let srcKeys = Object.keys(source);
  return collection.filter((obj) =>
    srcKeys.every((key) => obj.hasOwnProperty(key) && obj[key] === source[key])
  );
}

console.log(
  whatIsInAName(
    [
      {
        first: "Romeo",
        last: "Montague",
      },
      {
        first: "Mercutio",
        last: null,
      },
      {
        first: "Tybalt",
        last: "Capulet",
      },
    ],
    {
      last: "Capulet",
    }
  )
);
