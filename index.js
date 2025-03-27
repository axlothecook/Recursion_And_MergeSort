// Fibonacci numbers
// Task: Generate array of Fibonacci Numbers up until the number entered by user. 
// For exampleArray, when user enters 5, the function will generate the first 5 Fibonacci numbers, always starting from zero.

// list of fibonacci numbers for reference
[ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233];


function loop(max, arr1 = [0, 1]) {
    if(max <= 2) return max;
    const [nextToLast, last] = arr1.slice(-2);
    arr1.push(nextToLast + last);
    return arr1;
};

function recursion(max, array = [0, 1]) {
    if(max <= 2) return array;
    const temp = recursion(max - 1);
    if(temp.length > 1) {
        temp.push(temp[temp.length - 1] + temp[temp.length - 2]);
        array = temp;
    };
    return array;
};

function recursionBetter(max, array = [0, 1]) {
    if(max <= 2) return array;
    const [nextToLast, last] = array.slice(-2);
    return recursionBetter(max - 1, [...array, nextToLast + last]);
};

console.log(loop(8));
console.log(recursion(8));
console.log(recursionBetter(8));


// Merge sort
// Task: Given an unsorted array of x elements, return the array with all of its elements sorted 
// from smallest to largest

const exampleArray = [3, 2, 1, 13, 8, 5, 0, 1];
const exampleArray2 = [105, 79, 100, 110];
const parentArr = [3, 2, 5, 7, 4, 1, 8, 6];

function mergeSort(arr) {
    if(arr.length === 1) return arr;
    var mediumIndex = arr.length / 2;
    if(/\./gm.test(mediumIndex)) mediumIndex = Math.floor(mediumIndex);
    let leftArr = mergeSort(arr.slice(0, mediumIndex));
    let rightArr = mergeSort(arr.slice(mediumIndex, arr.length));

    var finalArr = [];
    [i, j] = [0, 0];
    while((i !== leftArr.length) && (j !== rightArr.length)) {
        if (leftArr[i] < rightArr[j]) {
            finalArr.push(leftArr[i]);
            i++;
        } else {
            finalArr.push(rightArr[j]);
            j++;
        };
    };
    if(i === leftArr.length) finalArr = finalArr.concat(rightArr.slice(j, rightArr.length));
    if(j === rightArr.length) finalArr = finalArr.concat(leftArr.slice(i, leftArr.length));

    return finalArr;

};

console.log(mergeSort(parentArr));
console.log(mergeSort(exampleArray));
console.log(mergeSort(exampleArray2));
