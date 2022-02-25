class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.frontIndex = 0;
    this.backIndex = 0;
  }

  enqueue(value) {
    this.storage[this.backIndex] = value;
    this.backIndex++;
  }

  dequeue() {
    var removeProp = this.storage[this.frontIndex];
    delete this.storage[this.frontIndex];
    this.frontIndex++;
    return removeProp;
  }

  size() {
    return Object.keys(this.storage).length;
  }

}

var instance = new Queue;