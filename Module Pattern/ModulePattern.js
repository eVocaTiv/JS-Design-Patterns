
var testModule = (function () {
 
  var counter = 0;
 
  return {
 
    incrementCounter: function () {
      return counter++;
    },
 
    resetCounter: function () {
      console.log( "counter value prior to reset: " + counter );
      counter = 0;
    }
  };
 
})(); // NOTICE: uses IIFEs contrary to the ObjectLiterals style.
 
// inc counter
testModule.incrementCounter();
 
// reset counter
testModule.resetCounter();


// DISADV. : Difficult to change visibility of a member once it has been defined because it has to be changed at all the places it is used!