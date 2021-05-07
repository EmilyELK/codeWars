/* basic string reversal */

function strReverse(str) {
  var empty = "";
  for (var i = str.length-1; i >= 0; i--) {
    empty += str[i];
  }
  console.log(empty);
}

strReverse('Hello');