// Q - 1

var arr1 = [[1, 2], [3, 4]];
var arr2 = [[5, 6], [7, 8]];

function sumOfArr(arr1, arr2) {

    var sumArray = [];

    for (var i = 0; i < arr1.length; i++) {

        sumArray[i] = [];
        for (var j = 0; j < arr1[i].length; j++) {

            sumArray[i][j] = arr1[i][j] + arr2[i][j];
        }
    }

    return sumArray;
}

var result = sumOfArr(arr1, arr2);

console.log("sum of 2d arry :" ,result);


// Q - 2

var array = [[1, 2, 3], [4, 5, 6],[7, 8, 9]];
function sumOfBoundary(array) {
    var sum = 0;

    var rows = array.length;
    var cols = array[0].length;

    for (var i = 0; i < cols; i++) {
        sum += array[0][i];
    }

    for (var i = 0; i < cols; i++) {
        sum += array[rows - 1][i];
    }

    for (var i = 1; i < rows - 1; i++) {
        sum += array[i][0];
    }

    for (var i = 1; i < rows - 1; i++) {
        sum += array[i][cols - 1];
    }

    return sum;
}

var result = sumOfBoundary(array);

console.log("sum of boundary array :",result);    


// Q - 3

var array1 = [[1, 6], [2, 9]];
var array2 = [[8, 3], [4, 6]];

function mergeArray(array1, array2) {

    var mArray = [];

    var totalRows = array1.length + array2.length;
    var totalCols = array1[0].length;

    for (var i = 0; i < totalRows; i++) {
        mArray[i] = [];
        for (var j = 0; j < totalCols; j++) {
            if (i < array1.length) {
                mArray[i][j] = array1[i][j];
            } else {
                mArray[i][j] = array2[i - array1.length][j];
            }
        }
    }

    return mArray;
}

var result = mergeArray(array1, array2);

console.log("merge array :" ,result);


// Q - 4


const arrayK = [[4, 3, 2],[5, 7, 1],[8, 6, 9]];
function maxMinArray(array) {
    if(array.length === 0 || array[0].length === 0) {
        throw new Error("Array is empty or contains empty subarrays");
    }

    let max = array[0][0];
    let min = array[0][0];

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] > max) {
                max = array[i][j];
            }
            if (array[i][j] < min) {
                min = array[i][j];
            }
        }
    }

    return { max: max, min: min };
}

const result1 = maxMinArray(array);

console.log("Maximum value is:", result1.max);
console.log("Minimum value is:", result1.min);
