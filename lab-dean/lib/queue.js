'use strict';

const Node = require('./node.js');

module.exports = class {
  constructor() {
    this.top = null,
    this.bottom = null,
    this.newestIndex = 1,
    this.oldestIndex = 1,
    this.size = 0;
  }

  enqueue(val) {
    let node = new Node(val);
    
    if(this.size === 0) this.top = node;
    this.bottom = node;
    this.newestIndex++;
    this.size++;
    
    return this.bottom;
  }

  dequeue() {
    let temp = this.next;
    
    delete this.top;
    this.top = temp;
    this.oldestIndex++;
    this.size--;
    
    return temp;
  }
};