var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.storage.length = 0;
};

Stack.prototype.push = function(value) {
  this.storage[this.storage.length] = value;
  this.storage.length++;
};
Stack.prototype.pop = function() {
  var popKey = this.storage.length - 1;
  var poppedProp = this.storage[popKey];
  delete this.storage.length[popKey];
  if (this.storage.length !== 0) {
    this.storage.length--;
  }
  return poppedProp;
};
Stack.prototype.size = function() {
  // return Object.keys(this.storage).length;
  return this.storage.length;
};
var instance = new Stack();