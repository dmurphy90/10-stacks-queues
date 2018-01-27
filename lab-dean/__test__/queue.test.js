'use strict';

const Queue = require('../lib/queue.js');
require('jest');

describe('Queue Data Structure Model', function() {
  beforeEach(() => this.queue = new Queue());

  describe('Default Properties', () => {
    it('Should create a new instance of a queue', () => {
      expect(this.queue).toBeInstanceOf(Queue);
    });
    it('Should have a default val of null assigned to the top property', () => {
      expect(this.queue.top).toBeNull();
    });
    it('Should have a default value of 0 assigned to the size property', () => {
      expect(this.queue.size).toEqual(0);
    });
  });

  describe('#enqueue', () => {
    it('Should have a size of 20', () => {
      [...Array(20)].map((e, i) => this.queue.enqueue(~~(Math.random() * i)));
      expect(this.queue.size).toEqual(20);
    });
    it('Should add a new node with the value of 1 t the end of the queue', () => {
      this.queue.enqueue(1);
      expect(this.queue.bottom.val).toEqual(1);
      this.queue.enqueue(2);
      expect(this.queue.bottom.val).toEqual(2);
    });
  });

  describe('#dequeue', () => {
    it('Should remove the first node from the queue', () => {
      this.queue.dequeue();
      expect(this.queue.oldestIndex).toEqual(2);
      this.queue.dequeue();
      expect(this.queue.oldestIndex).toEqual(3);
    });
  });
});