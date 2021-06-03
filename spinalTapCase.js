// thisIsSpinalTap

// This Is Spinal Tap

// The_Andy_Griffith_Show

// Teletubbies say Eh-oh

// AllThe-small Things

// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.



function spinalCase(str) {
    function upperToHyphenLower(match, offset, string) {
        return (offset > 0 ? ' ' : '') + match.toLowerCase();
    }
    return str
        .replace(/\W|[A-Z]|_|-/g, upperToHyphenLower)
        .split(/\W/)
        .filter(item => item && item != '_')
        .join("-")
}

console.log(spinalCase('The_Andy_Griffith_Show'))


// solution 2 

function anotherSpinalCase(str) {
    // "It's such a fine line between stupid, and clever."
    // --David St. Hubbins
  
    return str
      .split(/\s|_|(?=[A-Z])/)
      .join("-")
      .toLowerCase();
  }