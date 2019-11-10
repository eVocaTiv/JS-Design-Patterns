// Restricts instantiation of a class to a single object.
// returns a structure as opposed to a class/ object. 
// Different from static class in the sense it's inititiation can be delayed depending on the info. needed. 

var mySingleton = (function () {
    var Instance;
    function init() {
        // private members
        var x = 5;
        function privateMethod() {
            console.log('private method', x);
        }
        // public members
        return {
            publicMethod: function() {
                privateMethod();
            }
        }
    } // end init()
    
    return {
        getInstance: function() {
            if (!Instance) {
                Instance = init();
            }
            return Instance;
        }
    };
})(); // IIFE