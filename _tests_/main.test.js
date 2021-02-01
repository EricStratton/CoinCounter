// import { exportAllDeclaration } from '@babel/types';
// import { TestScheduler } from 'jest';
// import { describe } from 'yargs';
import { quarterCounter } from './../src/main.js';

describe('quaterCounter', () => {

  const price = 4.99;
  const num = 0;

  
  test('should subtract 0.25 from whole until whole is less than 0.25', () => {
    expect(quarterCounter(price, num)).toEqual(19);
  });

});

