export let array = [6, 4, 3, 5, 1, 2]

export let insertionSort = arr => {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];

    for (let j = i - 1; j >= 0; j--) {
      if (current < arr[j]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  return arr;
}

insertionSort(array);
