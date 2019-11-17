var mediatorObject = {
    someFunction: function() {
        var data = this.getData();
        
        data.on("complete", function(dataObject){
            var moreData = this.getMoreData(dataObject);
            moreData.on("save", function(dataObject){
                dataObject.save();
            });
        });
    }
}


//  ADV. useful in the case when any components are interconnected with other components, a mediator can be used to loosen the coupling between them.
// DISADV. introduces a single point of failure. Also can lead to latency issues since communication is not direct.


// VS Facade Pattern. - very similar but facade just defines a simpler interface to a module / system and doesn't add any additional functionality.
//  Other modules in the system aren't directly aware of the concept of a facade and could be considered unidirectional.