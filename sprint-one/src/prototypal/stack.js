var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};

  return someInstance;
};

var stackMethods = {
  push: function(value) {
    var key = Object.keys(this.storage).length;
    this.storage[key] = value;
  },
  pop: function() {
    var lastProp = Object.keys(this.storage).length - 1;
    var poppedProp = this.storage[lastProp];
    delete this.storage[lastProp];
    return poppedProp;
  },
  size: function() {
    return Object.keys(this.storage).length;
  }
};


