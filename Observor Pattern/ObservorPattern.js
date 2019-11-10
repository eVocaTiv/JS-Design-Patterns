// Observors

// The Observer is a design pattern where an object (known as a subject)
// maintains a list of objects depending on it (observers), automatically notifying them of any changes to state.

// observors can be added or removed from the list as required.

function ObserverList(){
    this.observerList = [];
  }
   
  ObserverList.prototype.add = function( obj ){
    return this.observerList.push( obj );
  };
   
  ObserverList.prototype.count = function(){
    return this.observerList.length;
  };
   
  ObserverList.prototype.get = function( index ){
    if( index > -1 && index < this.observerList.length ){
      return this.observerList[ index ];
    }
  };
   
  ObserverList.prototype.indexOf = function( obj, startIndex ){
    var i = startIndex;
   
    while( i < this.observerList.length ){
      if( this.observerList[i] === obj ){
        return i;
      }
      i++;
    }
   
    return -1;
  };
   
  ObserverList.prototype.removeAt = function( index ){
    this.observerList.splice( index, 1 );
  };

  // subject 

  function Subject(){
    this.observers = new ObserverList();
  }
   
  Subject.prototype.addObserver = function( observer ){
    this.observers.add( observer );
  };
   
  Subject.prototype.removeObserver = function( observer ){
    this.observers.removeAt( this.observers.indexOf( observer, 0 ) );
  };
   
  Subject.prototype.notify = function( context ){
    var observerCount = this.observers.count();
    for(var i=0; i < observerCount; i++){
      this.observers.get(i).update( context );
    }
  };



  // The Observer
function Observer(){
    this.update = function(){
      // ...
    };
  }


// ** important difference between Pubsub and Observor pattern
// in observor pattern, the observor wishing to receive notifications from subscriber must subscribe to the subject
// the pubsub pattern uses more of an topic / event channel which allows code to define application specific events 
// where custom arguements can be passed pertaining to specific subscribers for different update actions.
// so pubsub is kind of an extension / variation of the observor pattern.


// ADVANTAGES OF OBS AND PUBSUB : help to breakdown the application into loosely coupled code and increase flexibility. 
// DISADVANTAGES: based on assumptions of reliability of subscribers. A drawback resulting from decoupled nature. 