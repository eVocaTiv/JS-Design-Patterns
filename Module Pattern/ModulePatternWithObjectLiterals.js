// USING OBJECT LITERALS
var myModule = {
 
    myProperty: "someValue",
   
    // object literals can contain properties and methods.
    // e.g we can define a further object for module configuration:
    myConfig: {
      useCaching: true,
      language: "en"
    },
   
    // a very basic method
    saySomething: function () {
      console.log( "What a lovely weather!" );
    },
   
    // output a value based on the current configuration
    reportMyConfig: function () {
      console.log( "Caching is: " + ( this.myConfig.useCaching ? "enabled" : "disabled") );
    },
   
    // override the current configuration
    updateMyConfig: function( newConfig ) {
   
      if ( typeof newConfig === "object" ) {
        this.myConfig = newConfig;
        console.log( this.myConfig.language );
      }
    }
  };
   
  // invoke member methods using object . notation.
  myModule.saySomething();
  myModule.reportMyConfig();
  myModule.updateMyConfig({
    language: "fr",
    useCaching: false
  });
   
  // Outputs: Caching is: disabled
  myModule.reportMyConfig();