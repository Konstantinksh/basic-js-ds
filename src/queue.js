const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue extends ListNode {

  constructor(x) {
    super(x)
  }

  getUnderlyingList() {
    return this.next
  }

  enqueue(value) {
    // console.log(this)
    if (this.next === null) {
      this.next = new Queue(value);
    } else {
      this.next.enqueue(value)
    }
  }

  dequeue() {
    let result = this.next.value;
    this.next = this.next.next;
    return result
  }
}

let test = new Queue();
console.log(test)
test.enqueue(1)
test.enqueue(2)
console.log(test)
console.log(
test.dequeue()
)
console.log(test)
console.log(
  test.getUnderlyingList()
)


module.exports = {
  Queue
};
