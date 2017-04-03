export let array = [4, 3, 2, 0];

export const bubbleSort = arr => {
  for (let i = 0; i <= arr.length; i++) {
    for (let j = 0; j <= arr.length; j++) {
      console.log(arr)
      if (arr[j] > arr [j + 1]) {
        [arr[j], arr[j + 1]] = [arr[ j + 1], arr[j]]
      }
    }
  }
  return arr;
}

bubbleSort(array);
