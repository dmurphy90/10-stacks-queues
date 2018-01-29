'use strict';

const Node = require('./node.js');

module.exports = class {
  constructor() {
    this.front = null;
    this.size = 0;
  }

  enqueue(val){

    let nd = new Node(val);

    if(!this.front) {
      this.front = nd;
      this.size++;

      return this;
    }

    for(var itr = this.front; itr.next; itr = itr.next);
    itr.next = nd;
    this.size++;

    return this;
  }

  dequeue(){
   
    if(!this.front) throw new Error('No entries to remove.');
   
    let temp = this.front;
   
    this.front = temp.next;
    temp.next = null;
    this.size --;
   
    return this.front;
  }
};