const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  // console.log(l.value, l.next.value, l)
  if (l.next === null && l.value === k) {
    // console.log('null')
    l = null;
    // console.log(l)
    return l
  } else if (l.next === null && l.value !== k) {
    // console.log('ret')
    // console.log(l)
    return l
  } else if (l.value === k) {
    // console.log('del')
    l.next = removeKFromList(l.next, k);    
    l = l.next;
    // console.log(l)
    return l;
  } else {
    // console.log('next')
    l.next = removeKFromList(l.next, k);
    // console.log(l)
    return l;
  }
  // console.log(l)
}

function convertArrayToList(arr) {
  return arr.reverse().reduce((acc, cur) => {
    if (acc) {
      const node = new ListNode(cur);
      node.next = acc;
      return node;
    }

    return new ListNode(cur);
  }, null);
}

arr = [3, 3, 3, 3, 3, 3] ;
k = 3
let inputtest = convertArrayToList(arr)
// console.log(inputtest)
console.log(
removeKFromList(inputtest, k)
)
// console.log(inputtest)
module.exports = {
  removeKFromList
};
