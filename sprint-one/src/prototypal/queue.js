var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance['storage'] = {};
  someInstance['delCounter'] = 0;
  someInstance['newProp'] = 0;
  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    var key = this.newProp;
    this.storage[key] = value;
    this.newProp++;
  },
  dequeue: function() {
    var popKey = this.delCounter;
    var poppedProp = this.storage[popKey];
    delete this.storage[popKey];
    this.delCounter++;
    return poppedProp;
  },
  size: function() {
    return Object.keys(this.storage).length;
  }
};
