var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.frontIndex = 0;
  this.backIndex = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.backIndex] = value;
  this.backIndex++;
};
Queue.prototype.dequeue = function() {
  var dequeuedProp = this.storage[this.frontIndex];
  delete this.storage[this.frontIndex];
  this.frontIndex++;
  return dequeuedProp;
};
Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};

var instance = new Queue();
