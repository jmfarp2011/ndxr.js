# ndxr.js
NDXR is a lightweight javascript array indexer; currently <50lines of code uncompressed (this README is longer than the NDXR code).

It allows you to index an array of objects based, and extends itself with the object properties.

#### Usage

````javascript
//create an array of objects
var people = [{
    name: 'John',
    age: 21,
    gender: 'male',
    hometown: 'Dallas'
},{
    name: 'Jill',
    age: 25,
    gender: 'female',
    hometown: 'Austin'
},{
    name: 'Bob',
    age: 29,
    gender: 'male',
    hometown: 'Houston'
},{
    name: 'Jack',
    age: 32,
    gender: 'male',
    hometown: 'Dallas'
}];

//create the ndxr
var ndxr = new NDXR(people, ['gender', 'hometown']);

//lookup using ndxr.key__value
ndxr.gender__male.hometown__Dallas; // returns an array containing John and Jack objects

//reindex the array
ndxr.index(['name']);
ndxr.name__Jill;// returns an array containing the Jill object
````
