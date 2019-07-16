#!/usr/bin/env node

const mergeSort = (arr, half= Math.floor(arr.length/2))=>{
    if(arr.length < 2){
        return arr;
    }

    // left  part of the array
    const left = arr.splice(0, half);
    return merger(mergeSort(left), mergeSort(arr));
}

const merger = (left, right)=>{
    const arr =  [];
    if(left[0] < right[0]){
        arr.push(left.shift)
    } else  {
        arr.push(right.shift())
    }

    return [...arr, ...left, ...right];
}
