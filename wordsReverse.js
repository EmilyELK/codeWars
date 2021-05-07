function wordReverse(str) {
  var words = str.split(" ");
  var empty = "";
  for (var i = words.length-1; i >= 0; i--) {
    empty += words[i] + " ";
  }
  console.log(empty);
}

wordReverse('see dog run');