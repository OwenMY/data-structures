var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;
  var key = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[counter] = value;
    counter++;
  };

  someInstance.dequeue = function() {
    var key = 0;
    var poppedKey = 0;
    while (key !== counter) {
      if (storage[key] !== undefined) {
        poppedKey = storage[key];
        delete storage[key];
        return poppedKey;
      }
      key++;
    }
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
