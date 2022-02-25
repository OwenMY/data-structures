var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance['counter'] = 0;
  someInstance['key'] = 0;
  someInstance['storage'] = {};
  _.extend(someInstance, queueMethods);

  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    var key = this.key;
    this.storage[key] = value;
    this.key++;
  },
  dequeue: function() {
    var poppedKey = this.storage[this.counter];
    delete this.storage[this.counter];
    this.counter++;
    return poppedKey;
  },
  size: function() {
    return Object.keys(this.storage).length;
  }
};


