// Reverse the order of words in a given sentence (an array of characters).

var strng = "Hello World";

(function reverseWords() {
    var arr = strng.split(' ');
    var newStrng = arr.reverse().join(' ')
    return newStrng
})()