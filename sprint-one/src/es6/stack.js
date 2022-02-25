class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  push(value) {
    var newProp = Object.keys(this.storage).length;
    this.storage[newProp] = value;
  }

  pop() {
    var popKey = Object.keys(this.storage).length - 1;
    var popProp = this.storage[popKey];
    delete this.storage[popKey];
    return popProp;
  }

  size() {
    return Object.keys(this.storage).length;
  }

}

var instance = new Stack();