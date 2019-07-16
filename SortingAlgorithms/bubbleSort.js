#!/usr/bin/env node

/**
 *
 * sorting algorithm that compares
 * an item with the next one and if
 * it is greater than the next one,
 * we swap
 *
 * @param {array} arrayOfItems 
 * 
 */
let compare = (n1, n2) => n1 - n2;

let bubbleSort = (arr, cmp = compare) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {      
      if (cmp(arr[j], arr[j - 1]) < 0) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      }
    }
  }
  return arr;
};

bubbleSort([6, 7, 15, 3, 4, 19]);