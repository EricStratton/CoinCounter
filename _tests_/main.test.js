import { quarterCounter } from './../src/main.js';

describe('quaterCounter', () => {

  const price = 4.99;
  const quarters = 0;
  
  test('should subtract 0.25 from whole until whole is less than 0.25', () => {
    expect(quarterCounter(price, quarters)).toEqual(19);
  });

});

