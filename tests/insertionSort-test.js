import { insertionSort } from '../index/insertionSort';
import { assert } from 'chai';
import { generateRandomNumber } from '../index/randomNumber.js'

describe('insertionSort', () => {
  it('should be a function', () => {
    assert.isFunction(insertionSort);
  });

  it('should have an array', () => {
    assert.isFunction(insertionSort, []);
  });

  it('should reorder numbers', () => {
    let array1 = generateRandomNumber(25);
    let array2 = array1;

    insertionSort(array1);

    assert.deepEqual(array1, array2.sort());
  });

  it('should reorder letters', () => {
    let randomArray = ['b', 'c', 'd', 'e', 'a']

    insertionSort(randomArray);

    assert.deepEqual(randomArray, ['a', 'b', 'c', 'd', 'e']);
  });

  it('should reorder negative numbers', () => {
    let randomArray = [-1, -5, -4, -2, -3]

    insertionSort(randomArray);

    assert.deepEqual(randomArray, [-5, -4, -3, -2, -1])
  });

  it('should reorder negative and positive numbers', () => {
    let randomArray = [-1, -5, -4, -2, -3, 3, 2, 4, 1, 5, 0]

    insertionSort(randomArray);

    assert.deepEqual(randomArray, [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]);
  });
});
