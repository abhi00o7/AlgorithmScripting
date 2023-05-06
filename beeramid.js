/**
 * Let's pretend your company just hired your friend from college and paid you a referral bonus.
 * Awesome! To celebrate, you're taking your team out to the terrible dive bar next door 
 * and using the referral bonus to buy, and build, the largest three-dimensional beer can pyramid you can.
 * And then probably drink those beers, because let's pretend it's Friday too.

A beer can pyramid will square the number of cans in each level - 1 can in the top level, 
4 in the second, 9 in the next, 16, 25...

Complete the beeramid function to return the number of complete levels of a beer can pyramid you can make, 
given the parameters of:

@param your_referral_bonus, @type Number

@param price_of_a_beer_can @type Number

For example:

beeramid(1500, 2); // should === 12
beeramid(5000, 3); // should === 16

 */

const beeramid = (bonus, price) => {
  let beer = Math.floor(bonus / price);
  let levels = 0;
  let cans = 0;
  while (beer >= cans) {
    levels++;
    cans += levels ** 2;
  }
  return levels ? levels - 1 : levels;
};

console.log(beeramid(1500, 2));

// solution 2

const beeramid2 = (bonus, price) => {
  let beers = Math.floor(bonus / price);
  let levels = 0;
  while (beers >= 0) {
    levels++;
    beers -= levels ** 2;
  }
  return levels - 1;
}