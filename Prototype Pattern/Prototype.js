// either by using Object.create(...)
// Allows us to apply the concept of inheritance in JS.

// => The prototype of  myCar & anotherOne === Car
var Car = {
    model: "Honda"
};

var myCar = Object.create(Car);

var anotherOne = Object.create(Car, {
    name: {
        value: "Another car!",
    },
});

console.log(Car);
console.log(myCar);
console.log(anotherOne);

// USE when you want to reuse the properties of an object.