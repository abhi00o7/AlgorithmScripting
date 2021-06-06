// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

function convertHTML(str) {
    const htmlEntities = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&apos;"
    }
    return str.replace(/[&<>"']/g, match => htmlEntities[match])
}

console.log(convertHTML("Dolce & Gabbana"))

// test cases
// convertHTML("Dolce & Gabbana") should return the string Dolce &amp; Gabbana.

// Passed
// convertHTML("Hamburgers < Pizza < Tacos") should return the string Hamburgers &lt; Pizza &lt; Tacos.

// Passed
// convertHTML("Sixty > twelve") should return the string Sixty &gt; twelve.

// Passed
// convertHTML('Stuff in "quotation marks"') should return the string Stuff in &quot;quotation marks&quot;.

// Passed
// convertHTML("Schindler's List") should return the string Schindler&apos;s List.

// Passed
// convertHTML("<>") should return the string &lt;&gt;.

// Passed
// convertHTML("abc") should return the string abc.