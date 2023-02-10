// create sliding window algo usages

const smallestRepeatWindow = arrayInput => {
  let smallestWindow = Number.MAX_SAFE_INTEGER
  let window = []
  let left = 0;
  for(let right=0; right<arrayInput.length; right  ++){
    window.push(arrayInput[rightBound])
    while([...new Set(window)].length < window.length){
      if(arrayInput[left] === arrayInput[right]){
        smallestWindow = Math.min(smallestWindow, (right - left))
      }
      left++
      window.shift()
    }
  }
return smallestWindow
};