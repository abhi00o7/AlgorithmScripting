// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

function destroyer(arr,...args) {
    return arr
            .filter(item =>  !args.includes(item)  );
  }
  
//   console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3)); 

console.log(destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan"))