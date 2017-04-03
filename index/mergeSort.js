export let array = [4, 3, 5, 6, 1, 2]


export let split = arr => {
  if (arr.length === 1) {
    return arr;
  } else {
    let mid = arr.length / 2;
    let left = arr.slice(0, mid);
    let right = arr.slice(mid, arr.length);

    return mergeSort(split(left), split(right));
  }
}

export let mergeSort = (left, right) => {
  let sorted = [];

  while (left.length && right.length) {
    if (left[0] > right[0]) {
      sorted.push(right.shift());
    } else {
      sorted.push(left.shift());
    }
  }

  while (left.length) {
    sorted.push(left.shift());
  }

  while (right.length) {
    sorted.push(right.shift());
  }
  return sorted;
}

split(array);
