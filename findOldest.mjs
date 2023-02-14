function findOldestPerson(arr) {
  console.log(arr)
  return Math.max(arr.map(obj => obj.age))
}


// const findOldestPerson = (arr) => arr.filter((obj, index) => {
//   let maxAge = obj[index] ?? 0
//   if()
//   })


console.log(findOldestPerson([{
  name: 'Liam',
  age: 28
}, {
  name: 'Lisa',
  age: 2
}, {
  name: 'lucy',
  age: 289
}, ]))