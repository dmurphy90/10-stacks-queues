'use strict';

const Stack = require('../lib/stack.js');
require('jest');

describe('Stack Data Structure Module', function() {
  beforeEach(() => this.stack = new Stack());

  describe('Default properties', () => {
    it('Should create a new instance of a Stack', () => {
      expect(this.stack).toBeInstanceOf(Stack);
    });
    it('Should have a default val of null assigned to the top property', () => {
      expect(this.stack.top).toBeNull();
    });
    it('Should have a default value of 0 assigned to the size property', () => {
      expect(this.stack.size).toEqual(0);
    });
    it('Should have a maxSize property with a default val of 1048', () => {
      expect(this.stack.maxSize).toEqual(1048);
    });
  });

  describe('#push', () => {
    it('Should have a size of 20', () => {
      [...Array(20)].map((e, i) => this.stack.push(~~(Math.random() * i)));
      expect(this.stack.size).toEqual(20);
    });
    it('Should add a new node with the value of 1 to the top of the stack', () => {
      this.stack.push(1);
      expect(this.stack.top.val).toEqual(1);
    });
    it('Should throw an error when maxSize is met', () => {
      expect(() => {
        [...Array(1049)].map((e, i) => this.stack.push(~~(Math.random() * i)));
      }).toThrow();
    });
  });

  describe('#pop', () => {
    it('Should remove the top most node from the stack', () => {
      this.stack.push(1);
      expect(this.stack.top.val).toEqual(1);
      expect(this.stack.pop().val).toEqual(1);
    });
  });

  describe('#peek', () => {
    it('should return the top of the stack', () => {
      expect(this.stack.top).toBeNull();
      this.stack.push(1);
      expect(this.stack.peek().val).toEqual(1);
    });
  });
});