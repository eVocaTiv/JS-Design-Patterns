// This pattern 'encapsulates' a request as an object., allowing us to paramterize operations.
// i.e makes invocation of a method -> object like.
// an (object-oriented callback)..

// ADV - allows us to decouple invocation of actions from the object with implement them, allowing us
// to swap out concrete classes ( for flexibility ).


// An object implementing actions.
(function() {
    var CarManager = {
        requestInfo: function(model, id) {
            return model + id;
        },
        buy: function(model, id) {
            return " You have bought " + model + id;
        },
    };
});


// If the API behind CarManager changes, then all objects directly calling these methods will also need modification
// so we use the Command pattern here by expanding CarManager to provide an interface.

// checks if there is a method/ action with this name and then invokes it on the passed parameters.
carManager.execute = function(name) {
    return carManager[name] && carManager[name].apply(carManager, [].slice.call(arguments, 1));
}

// usage
carManager.execute( "buy", "Ferrari", "14523" );
carManager.execute( "requestInfo", "Ford Mondeo", "54323" );
carManager.execute( "requestInfo", "Ford Escort", "34232" );
carManager.execute( "buy", "Ford Escort", "34232" );