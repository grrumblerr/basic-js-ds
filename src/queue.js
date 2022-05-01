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
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    // this.length = 0;
}

  getUnderlyingList() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.first;
  }

  enqueue(value) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    const node = new ListNode(value); // creates the node using class Node

    if (this.first) { // if the first Node exitsts
        this.last.next = node; // inserts the created node after the last of our Queue
        this.last = node; // now the created node is the last node
    } else { // if there are no nodes in the Queue
        this.first = node; // the created node is a first 
        this.last = node // also the created node is a last in Queue because it is single.
    }

    // this.length++; // increases the length of Queue by 1
  }

  dequeue() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let current = this.first; // saves the link to the first which we need to remove
    this.first = this.first.next; // moves the first link to the second Node in the Queue
    // this.length--; // decreaments the length of our Queue

    return current.value; // returns the removed Node's value
  }
}

module.exports = {
  Queue
};
