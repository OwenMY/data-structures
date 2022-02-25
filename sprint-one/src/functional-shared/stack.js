var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};

  someInstance['storage'] = {};
  _.extend(someInstance, stackMethods);

  return someInstance;
};

var stackMethods = {
  push: function(value) {
    var key = Object.keys(this.storage).length;
    this.storage[key] = value;
  },
  pop: function() {
    var lastKey = Object.keys(this.storage).length - 1;
    var poppedKey = this.storage[lastKey];
    delete this.storage[lastKey];
    return poppedKey;
  },
  size: function() {
    return Object.keys(this.storage).length;
  }
};


