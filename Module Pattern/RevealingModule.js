var myRevealingModule = (function () {
 
    // private members
    // not yet exposed.
    var privateVar = "Ben Cherry",
        publicVar = "Hey there!";

    function privateFunction() {
        console.log( "Name:" + privateVar );
    }

    function publicSetName( strName ) {
        privateVar = strName;
    }

    function publicGetName() {
        privateFunction();
    }

    // Reveal public pointers to
    // private functions and properties

    return {
        setName: publicSetName,
        greeting: publicVar,
        getName: publicGetName
    };

})(); // IIFE

myRevealingModule.setName( "Kunal Dewan" );


var myRevealingModuleStyleTwo = (function () {
 
    var privateCounter = 0;

    function privateFunction() {
        privateCounter++;
    }

    function publicFunction() {
        publicIncrement();
    }

    function publicIncrement() {
        privateFunction();
    }

    function publicGetCount(){
      return privateCounter;
    }

   return {
        start: publicFunction,
        increment: publicIncrement,
        count: publicGetCount
    };

})();

myRevealingModuleStyleTwo.start();

// advantages: Systematic, encapsulation with public and private members, easy structure similar to OOP. cleaner than Constructor pattern.