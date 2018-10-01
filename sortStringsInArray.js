/* Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

For example, if this array were passed as an argument:

["Telescopes", "Glasses", "Eyes", "Monocles"]

Your function would return the following array:

["Eyes", "Glasses", "Monocles", "Telescopes"]

All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length. */

function sortByLength (array) {
  var newArr = [];
  var lengthArr = array.map(function(e){
    return e.length;
  })
  var sorted = closure(lengthArr);
  function closure(arr){
    return arr.concat().sort(function(a,b){
      return a-b;
    });
  }
  for (var i = 0; i < sorted.length; i++) {
    indexed = lengthArr.indexOf(sorted[i]);
    newArr.push(array[indexed]);
  }
  return newArr;
};