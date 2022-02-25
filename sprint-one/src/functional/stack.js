var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    var currentKey = Object.keys(storage).length;
    storage[currentKey] = value;
  };

  someInstance.pop = function() {
    var lastKey = Object.keys(storage).length - 1;
    var poppedProperty = storage[lastKey];
    delete storage[lastKey];
    return poppedProperty;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
