function Car(name, model) {
    this.name = name;
    this.model = model;

}

// using new keywords tells JS to treat the function like a constructor and return a new object.
var honda = new Car("Honda Civic");

// using prototyping here.
Car.prototype.toString = function() {
    return this.name + this.model;
}

honda.toString();