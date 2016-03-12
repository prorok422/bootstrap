/**
 * Created by proro on 11.03.2016.
 */

//alert("testJS");


var Animal = {
    getName: function (name) {
        return this.name;
    }
};

var Dog = function (name) {
    this.name = name;
};

Dog.prototype = Animal;

Dog.prototype.bark = function (name) {
    return 'Dog ' + this.name + ' is barking';
};

var dog = function (name) {
    this.name = name;
};

dog.prototype = Dog;

var dog = new Dog('Aban');

console.log(dog.getName());
console.log(dog.bark());
console.log(dog.getName() === 'Aban');
console.log(dog.bark() === 'Dog Aban is barking');