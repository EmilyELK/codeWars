// Given an array of integers and a value, determine if there are any two integers in the array whose sum is equal to the given value. Return true if the sum exists and return false if it does not. Consider this array and the target sums:

var array = [5, 7, 1, 2, 8, 4, 3];

function findSum(arr, t) {
    for (var i = 0; i < arr.length; i++) {
        var tester = arr.shift();
        for (var x = 0; x < arr.length; x++) {
            if (tester + arr[x] === t) {
                return true;
            } else {
                return false;
            }
        }
        array.push(tester);
    };
}

findSum(array, 10);