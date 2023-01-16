/**
 * When working with color values it can sometimes be useful 
 * to extract the individual red, green, and blue (RGB) component values for a color. 
 * Implement a function that meets these requirements:

Accepts a case-insensitive hexadecimal color string as its parameter (ex. "#FF9933" or "#ff9933")
Returns a Map<String, int> with the structure {r: 255, g: 153, b: 51} where r, g, and b range from 0 through 255
Note: your implementation does not need to support the shorthand form of hexadecimal notation (ie "#FFF")

Example
"#FF9933" --> {r: 255, g: 153, b: 51}

@param hexString @type String
 */

const hexToRGB = (hexString) => {
  const hex = hexString.slice(1);
  const rgb = {
    r: parseInt(hex.slice(0, 2), 16),
    g: parseInt(hex.slice(2, 4), 16),
    b: parseInt(hex.slice(4, 6), 16),
  };
  return rgb;
};

// alternative solution

const hexStringToRGB = (hexString) => {
  return {
    r: parseInt(hexString.slice(1, 3), 16),
    g: parseInt(hexString.slice(3, 5), 16),
    b: parseInt(hexString.slice(5, 7), 16),
  };
};

console.log(hexToRGB("#FF9933"));
console.log(hexStringToRGB("#FF9933"));
