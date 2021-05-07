// You are given an array of positive numbers from 1 to n, such that all numbers from 1 to n are present except one number x. You have to find x. The input array is not sorted.

var array = [3, 7, 1, 2, 8, 4, 5];
var counter = array.length;

function findMissing(arr, n) {
    var count = Math.floor((n + 1) * (n + 2) / 2);
    var sum = arr.reduce(function (a, b) {
        return a + b;
    }, 0);
    return count - sum;
}

findMissing(array, counter);