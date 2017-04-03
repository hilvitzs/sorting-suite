import { mergeSort, split } from '../index/mergeSort';
import { assert } from 'chai';
import { generateRandomNumber } from '../index/randomNumber';

describe('mergeSort', () => {
  it('should be a function', () => {
    assert.isFunction(mergeSort);
  });

  it('should have an array', () => {
    assert.isFunction(mergeSort, []);
  });

  it('should organize the array of numbers', () => {
    let array1 = generateRandomNumber(25);
    let array2 = array1;

    split(array1);

    assert.deepEqual(array1, array2.sort());
  });

  it('should organize the array of letters', () => {
    let array = ['e', 'd', 'c', 'a', 'b'];

    assert.deepEqual(split(array), ['a', 'b', 'c', 'd', 'e']);
  });

  it('should reorder negative numbers', () => {
    let randomArray = [-1, -5, -4, -2, -3]


    assert.deepEqual(split(randomArray), [-5, -4, -3, -2, -1])
  });

  it('should reorder negative and positive numbers', () => {
    let randomArray = [-1, -5, -4, -2, -3, 3, 2, 4, 1, 5, 0];
    let sortedArray = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];

    assert.deepEqual(split(randomArray), sortedArray);
  });
});
