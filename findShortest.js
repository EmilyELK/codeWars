/* Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types. */

function findShort(s){
    var words = s.split(' ');
    var lengths = words.map(function(val, i){
      return val.length;
    });
    var min = lengths.reduce(function(a,b){
      return Math.min(a,b);
    })
    return min;
}