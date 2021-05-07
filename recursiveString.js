/* Write a function that will reverse a string */

function reverse( str ) {
  if ( str.length <= 1 ) {
    return str;
  }
  return reverse( str.substr( 1 ) ) + str[ 0 ];
}

console.log(reverse('foo bar'));