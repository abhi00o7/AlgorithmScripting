// Pig Latin is a way of altering English Words. The rules are as follows:

// - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

// - If a word begins with a vowel, just add way at the end.

function pigLatin(str) {
    // “Like all magnificent things, it's very simple.”
    // ― Natalie Babbitt, Tuck Everlasting

    return str
        .replace(/^[aeiou]\w*/, "$&way")
        .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
}


console.log(pigLatin('pig'))

// regEx test samples

// this
// consonant
// algorithm
// pig
// latin