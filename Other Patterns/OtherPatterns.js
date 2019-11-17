// 1. Factory Pattern & Abstract Factory pattern.

//ADV. -  Use when dealing with multiple type of objects ( often unknown at compile time
// DISADV - May lead to complex code structure ( + hard to test ), so use with caution and only when required.

// 2. Mixin Pattern
// myMixins = {
    // some functions..
// }
// using _.extend(MyClass.prototype, myMixins)

// ADV - reduces redundancy of code
// DISADV - if using MyClass.Prototype.someMethod = myMixin.someMethod, may pollute prototypes as some developers may argue and promote clumsy structure.



// 3. Decorator pattern
// Classically, Decorators offered the ability to add behaviour to existing classes in a system dynamically. 
// The idea was that the decoration itself wasn't essential to the base functionality of the class, otherwise it would be baked into the superclass itself.


// 4. Flyweight pattern - uses segregation of data into intrinsic ( thus serving as common data for objects with same data values )
// where a factory can be used to initialize a new object if one with the input values doesn't exist.
 // and extrinsic ( usually a Singleton Manager class handle extrinsic data ).


 // 5. Namespace injection using .apply(..)
 // DISADV. - not really a clean way, other ways to do it.
 
 // 6. Bridge pattern - check out diagram at    https://www.codeproject.com/Articles/15665/Bridge-design-pattern-with-JavaScript ( also in my notes ). 
 // used when implementation and abstraction need to be separated. ( OOP concept )
 // eg. usecase - when the machine/implementation to be followed is dependent on runtime.


 // 7. Proxy pattern - 
 // USE CASES / ADV. - Returning to the question of why we would bother to use a proxy
 // we can give a few different scenarios where the proxy can come in handy: delaying instantiation of a large object, accessing a remote object, and access control.
 // ref. https://www.joezimjs.com/javascript/javascript-design-patterns-proxy/


 // 8. Adapter pattern - 
 // ref. https://dev.to/carlillo/design-patterns---adapter-2pi3