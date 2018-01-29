# 10 Stacks Queues

## Getting Started

To get started with this app, fork then clone down the repo to your machine and then navigate to the folder ```lab-dean```. Once in there type ```npm install``` to install all the dependencies needed for this app. You only really should need jest, and here's what your dependencies should look like.

```
 "dependencies": {
    "jest": "^22.1.4"
```

## The App

This app is essentially one set of two constructors to make a Stack data type of nested Node objects, and to make a queue data type of nested Node objects. 

Both of these are using the ```Node``` constructor, here is a preview of the generic Node constructor to see what each Node object will look like

```
module.exports = class {
  constructor(val) {
    if(!val) return new Error('Value must be passed as argument');
    this.val = val,
    this.next = null;
  }
};
```

The Stack constructor comes with three methods attached to it, the ```push(val)``` method which will create a new Node with the provided value and push it to the top of the Stack list. The ```pop``` method which will remove the top entry of the Stack list and make the Node below it the top. And finally the ```peek()``` method which will just allow you to see the top Node of the Stack. Here is the constructor to see how the Nodes are made, and the values they need. 

```
module.exports = class {
  constructor(maxSize=1048) {
    this.top = null,
    this.maxSize = maxSize,
    this.size = 0;
  }

  push(val) {
    if(this.size === this.maxSize) throw new Error('Stack overflow!');

    let node = new Node(val);

    node.next = this.top;
    this.top = node;
    this.size++;
    return this.top;
  }

  pop() {
    let temp = this.top;
    this.top = temp.next;
    temp.next = null;
    this.size--;
    return temp;
  }

  peek() {
    return this.top;
  }
};
```

The Queue constructor comes with two methods attached to it. The ```enqueue(val)``` constructor will make a new Node object with the value provided, and will place it in the Queue, at the front if none exist already. The other method that it comes with, the ```dequeue``` method will remove the Node at the front of the Queue and make the Node following it the front of the Queue now. Here is the Queue constructor to give an idea of how your Queue will look.

```
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
```
