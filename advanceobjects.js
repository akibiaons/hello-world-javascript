// We will now be moving on to the next learning objective, which is advance objects.
/*
Remember that objects in JavaScript are containers that store data and functionality.
In this lesson we will build upon the fundamentals of building objects and explore some 
more advance concepts.

- We will cover how to use the 'this' keyword.
- We will cover how to convey privacy in JavaScript methods.
- We will be defining getters and setters in objects.
- We will be creating factory functions.
- we will be using and showing examples of destrictive techniques.
*/
// Start of Lesson 1: The 'this' keyword
/* 
Objects are collections of data and functionality. We store the functionality in methods on
our objects. 
Below is an example:
*/
const goat1 = {
    dietType: 'herbivore',
    makeSound() {
        console.log('Baaa');
    }
}
// In our goat object above we have a .makeSound() method. We can invoke the .makeSound() method on goat.
//goat1.makeSound(); // Prints 'Baaa'
/*
Great! We now have an object that can print baa to the console. Next we will be adding a new method
called diet that prints the goats diet type.
*/
const goat = {
    dietType: 'herbivore',
    makeSound() {
        console.log('baaaa');
    },
   /*
    diet() {
        console.log(dietType);
    }*/
};
//goat.diet(); // Will producd a reference error as dietType is not defined.
/* 
It is strange that above the dietType is not defined even through it is a property of goat.
it is because inside the scope of the diet method, we don't automatically have access to the
other properties of the goat object.
*/
//This is where the this keyword comes to the rescue. If we use the 'this' keyword we can get dietType to work.
const goat3 = {
    dietType: 'herbivore',
    makeSound() {
        console.log('baaa');
    },
    diet() {
        console.log(this.dietType);
    }
};
goat3.diet(); // Will print out 'herbivore'

// Below is an example of using the 'this' keyword with object methods.
const robot = {
    model: '1E78V2',
    energyLevel: 100,
    provideInfo () {
      return (`I am ${this.model} and my current energy level is ${this.energyLevel}.`);
    }
  };
  console.log(robot.provideInfo());
// End of lesson 1: the 'this' keyword
//================================================================================================
// Start of Lesson 2: Arrow Functions and This.
/*
In the previous exercise we see that the calling object is the object the method belongs to.
When using the 'this' keyword the value of 'this' becomes the calling method, however, it becomes 
more complicated with arrow functions for methods as seen below:
*/
const lion = {
    dietType: 'carnivore',
    soundType: 'roar',
    makeSound: () => {
        console.log(this.soundType);
    },
};
lion.makeSound(); // Will print undefined, and we are using the 'this' keyword similar to the exercise above in lesson 1.
/*
Arrow functions don't work the same because they bind, tie, and already defined this value to the function
itself and isn't calling the object.
*/