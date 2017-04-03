import { assert } from 'chai'
import { bubbleSort } from '../index/bubbleSort.js'
import { generateRandomNumber } from '../index/randomNumber.js'

describe('BubbleSort', () => {
  it('should be a function', () => {
    assert.isFunction(bubbleSort);
  });

  it('should have an array', () => {
    assert.isFunction(bubbleSort, []);
  });

  it('should reorder numbers', () => {
    let randomArray = generateRandomNumber(25);
    let randomArray2 = randomArray;

    bubbleSort(randomArray);
    console.log(randomArray);
    assert.deepEqual(randomArray, randomArray2.sort());

  });

  it('should reorder letters', () => {
    let randomArray = ['b', 'c', 'd', 'e', 'a']

    bubbleSort(randomArray);

    assert.deepEqual(randomArray, ['a', 'b', 'c', 'd', 'e']);
  });

  it('should reorder negative numbers', () => {
    let randomArray = [-1, -5, -4, -2, -3]

    bubbleSort(randomArray);

    assert.deepEqual(randomArray, [-5, -4, -3, -2, -1])
  });

  it('should reorder negative and positive numbers', () => {
    let randomArray = [-1, -5, -4, -2, -3, 3, 2, 4, 1, 5, 0]

    bubbleSort(randomArray);

    assert.deepEqual(randomArray, [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]);
  });
});
