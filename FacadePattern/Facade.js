// ADV -  Provides a simpler interface to the user of an API.
// DISADV - May have performance drawbacks so should be justified with the usability.


var module = (function() {
 
    var _private = {
        i: 5,
        get: function() {
            console.log( "current value:" + this.i);
        },
        set: function( val ) {
            this.i = val;
        },
        run: function() {
            console.log( "running" );
        },
        jump: function(){
            console.log( "jumping" );
        }
    };

    return {
        facade: function(args) {
            _private.set(args.val);
            _private.get();
            if (args.run) {
                _private.run();
            }
        }
    };
})();

// usage
module.facade( { run: 10, val: 10});
// o/p -> "current value: 10" and "running"