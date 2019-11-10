function Car(name, model) {
    this.name = name;
    this.model = model;

    this.toString = function() {
        return this.name + this.model;
    };
}

// using new keywords tells JS to treat the function like a constructor and return a new object.
var honda = new Car("Honda Civic");
honda.toString();