/**
 * Compare and update the inventory stored in a 2 D array against a second 2 D array 
 * of a fresh delivery.Update the current existing inventory item quantities( in arr1).
 * If an item cannot be found, add the new item and quantity into the inventory array.
 * The returned inventory array should be in alphabetical order by item.
 */


function updateInventory(arr1, arr2) {
  const inventory = arr1.map(e => e[1])

  arr2.forEach(item => {
    if (inventory.includes(item[1])) {
      arr1[inventory.indexOf(item[1])][0] += item[0]
    } else {
      arr1.splice((arr1.length - 1), 0, item)
    }
  })
  // sort alphabetically and return
  return arr1.sort((a, b) => a[1].toUpperCase().localeCompare(b[1]));
}

// Example inventory lists

// updateInventory(curInv, newInv);

console.log(updateInventory(
  [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
  ],
  [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
  ]))


// updateInventory([
//   [21, "Bowling Ball"],
//   [2, "Dirty Sock"],
//   [1, "Hair Pin"],
//   [5, "Microphone"]
// ], [
//   [2, "Hair Pin"],
//   [3, "Half-Eaten Apple"],
//   [67, "Bowling Ball"],
//   [7, "Toothpaste"]
// ])
// [
//   [88, "Bowling Ball"],
//   [2, "Dirty Sock"],
//   [3, "Hair Pin"],
//   [3, "Half-Eaten Apple"],
//   [5, "Microphone"],
//   [7, "Toothpaste"]
// ]