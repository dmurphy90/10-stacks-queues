'use strict';

const Queue = require('../lib/queue.js');
require('jest');

describe('Queue Data Structure Model', function() {
  beforeEach(() => this.queue = new Queue());

  describe('Default Properties', () => {
    it('Should create a new instance of a queue', () => {
      expect(this.queue).toBeInstanceOf(Queue);
    });
    it('Should have a default val of null assigned to the front property', () => {
      expect(this.queue.front).toBeNull();
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
  }); 
  describe('#dequeue', () => {
    it('Should remove the first Node from the queue', () => {
      this.queue.enqueue(1);
      this.queue.enqueue(2);
      expect(this.queue.dequeue().val).toEqual(2);
    });
    it('Should have a size counter that increments correctly', () => {
      this.queue.enqueue(1);
      this.queue.enqueue(2);
      this.queue.enqueue(3);
      this.queue.enqueue(4);
      this.queue.dequeue();
      expect(this.queue.size).toEqual(3);
    });
  });
});