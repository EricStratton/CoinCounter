import { quarterCounter } from './../src/main.js';
import { coinCounter } from './../src/main.js';
import { calcCoins } from './../src/main.js';

describe('quaterCounter', () => {

  const price = 4.99;
  const quarters = 0;
  
  test('should subtract 0.25 from whole until whole is less than 0.25', () => {
    expect(quarterCounter(price, quarters)).toEqual(19);
  });
});

describe('coinCounter', () => {

  const price = 4.99;
  const coins = 0;
  const value = .01;

  test('should return total number of dimes', () => {
    expect(coinCounter(price, coins, value)).toEqual(499);
  });
});

describe('calcCoins', () => {
  const price = 4.99;

  test('should return all coin amounts', () => {
    expect(calcCoins(price)).toEqual("Change would be 19 quarters, 2 dimes, 0 nickles, and 4 pennies.");
  });
});

