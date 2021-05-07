// Given two sorted linked lists, merge them so that the resulting linked list is also sorted.

var head1 = [4, 8, 15, 19, null];
var head2 = [7, 9, 10, 16, null];
var nullStore = [];

(function mergeList() {
    var merged = head1.concat(head2);
    merged.sort(function (a, b) {
        if (a === null) return 1;
        else if (b === null) return -1;
        else return a - b;
    })
})()