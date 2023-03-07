// PART 1: Introduction to Objects in JavaScript
/*
- Objects are the most basic structure that permeates nearly every aspect of JavaScript.
- At their core, objects are containers storing related data and functionality.
*/
// Start of Lesson 1: Creating Object Literals
/*
- Objects can be assigned to any variable type and we use {} brackets to assign an object literal.
- We then fill an object with unordered data that is organized by key-value pairs.
Below is an example of an object literal being created:
*/
let spaceShip = {
    'Rocket': 'Turbo Fuel',
    color: 'silver'
};
//console.log(spaceShip);
// END of Lesson 1: Creating Object Literals
//================================================================================================================================
// Start of Lesson 2: Accessing Properties
/*
There are two ways to acess an object properties.
    - The first way is through the dot notation method.
      Dot notation is a method that we have learned earlier in the course.
*/
    'hello'.length; // This is an example of the dot notation method.
/*
With the dot notation method we just write the objects name followed by the key name. 
Below is an example of the dot notation method:
*/
let tesla = {
    model: 'Model 3',
    color:'gray'
};
//console.log(tesla.model); // Is an example of using the dot notation with an object and it'll return 'Model 3' to the console.
//console.log(tesla.color); // Is an example of using the dot notation with an object and it'll return 'gray' to the console.
// Below is an exersise where we use dot notation to call upon an object's properties.
let spaceship = {
    homePlanet: 'Earth',
    color: 'silver',
    'Fuel Type': 'Turbo Fuel',
    numCrew: '5 Members',
    flightPath: ['Venus', 'Mars', 'Saturn']
  };
  // Below will be a variable called crewCount that is equal to the numCrew property..
  let crewCount = spaceship.numCrew;
  let planetArray = spaceship.flightPath;
  //console.log(crewCount, planetArray);
  // END of Lesson 2: Accessing Properties
  //=================================================================================================================================
  // Start of Lesson 3: Bracket Notation
  /*
  The second way to access an object's properties is through the bracket notation.
    - Bracket notation was what we previously used when indexing arrays. 
  */
  ['A', 'B', 'C'][0]; //This here will return 'A'  
  /*
  To use bracket notation to access an objects property (key) we will pass
  in the key as a string.
  */
 spaceShip['Fuel Type'];

 /*
 Here are a few things to remember when using bracket notation:
   - We MUST use bracket notation to access keys that have numbers, spaces, or special characters in them.
   - We will get an error, see below and open console for more information
 */
let fordShip = {
    'Fuel Type': 'Jet Disel',
    'Active Mission': true,
    homePlanet: 'Earth',
    numCrew: 5
};
fordShip['Fuel Type']; // Returns 'Jet Disel'
fordShip['Active Mission']; // Returns 'True'
fordShip['homePlanet']; // Returns 'Earth'
fordShip['numCrew']; // Returns '5'

let isActive = fordShip['Active Mission'];
console.log(isActive); // Returns 'True'

/*
With bracket notation, we can also use a variable insde of the bracket to select the 
- keys of an object. 
Take a look at this function below to see an example:
*/
let returnAnyProp = (object, property) =>
object[property];

returnAnyProp(spaceShip, 'homePlanet'); // Returns 'Earth'
// End of Lesson 3: Bracket Notation
//=================================================================================================================================
// Start of Lesson 4: Property Assignment
/*
Objects assigned to properties are mutable and can be changed after they are written out.
    - We can use both a dot notation or bracket notation to change to object's properties.
    - Below is an example of both methods in action:
*/
    let starship = {
        'Fuel Type': 'vibranium',
        color: 'silver'
    };
    starship['Fuel Type'] = 'Vegetable Oil'; // will change from 'vibranium' to 'Vegetable Oil'
    starship.color = 'gold'; // will change from 'silver' to 'gold'
    /*
    There are a few things that can occure when changing a property.
        - If the property already exists, it will be overwritten and replaced with the new value.
        - If the property does not exist, it will be added to the object.

    Also note that you cannot change the property of an object asssigned with the const variable. But it is mutable.
    Below is the perfect example:
    */
   const mercedesShip = {
    'Fuel Type': 'Rocket Fuel',
    type: 'Luxury Shuttle'
    };
    //mercedesShip = 'Alien'; // This will create an error.
     mercedesShip.type = 'Luxury AV'; // This will change the type property to 'Luxury AV'
     mercedesShip.speed = '50 Mach'; // This will change the speed property to '50 Mach'
     //console.log(mercedesShip.type); // Will print 'Luxury AV'
     //console.log(mercedesShip.speed); // Will print '50 Mach'
// A property can also be deleted with the delete operator.
    delete mercedesShip.type; // Will delete the type property.
    delete mercedesShip['Fuel Type']; // Will delete the 'Fuel Type' property.
    //console.log(mercedesShip.type); // Will return undefined.
// End of Lesson 4: Property Assignment
//=================================================================================================================================
// Start of Lesson 5: Methods
/* 
When the data stored on an object is a function we call it a method. A property is what an 
object has, while a method is what an object does.

We have been using object methods throughout the whole course.
  - An example of this is with the .log() method when adding info to the console. console is a global JavaScript object.
  - .floor() is another example of a method is with the Math object.
Below is an example of creating ordinary, colon seperated key-value pairs.
*/
const alienShip = {
    invade: function () {
        console.log('You have been invaded!');
    }
};
// With the new method syntax we can ommit the colon and function keyword.
const alienShip2 = {
    invade () {
        console.log('Listen to our demands and you will be spared');
    }
}
alienShip.invade(); 
alienShip2.invade();
// To invoke the object methods we just need to append the object's name with the method name and a parenthesis.
// End of Lesson 5: Methods
//=================================================================================================================================
// Start of Lesson 6: Nested Objects
/*
Objects are often nested and can have properties within properties.
Below is an example of a nested object using the spaceship examples similar to above:
*/
let battleShip = {
    crew: {
        captain: {
            name: 'Jon Snow',
            specialty: 'Precision Beam, navigation, management'
        },
        firstmate: {
            name: 'Tim Gray',
            specialty: 'Repairs & Tech'
        },
        crewmember1: {
            name: 'Ailken Riley',
            specialty: 'Communications'
        },
        crewmember2: {
            name: 'Jona Morales',
            specialty: 'Cannon AB23'
        },
        crewmember3: {
            name: 'Joe Mama',
            specialty: 'Gun .300'
        },
        crewmember4: {
            name: 'Curtis Brown',
            specialty: 'Gun 41. Nato'
        }
    },
    engine: {
        type: 'Parallax',
        'speed': '1 Lightyear'
    },
    'weapons': {
        cannons: {
            name1: 'Precision Beam',
            name2: 'Cannon AB23',
            name3: 'Gun.300',
            name4: 'Gun 41. Nato'
        }
    }
};
/* 
Above is an example of a nested object. Remember we can chain operators to access nested properties.
Here's an example of chaining operators:
*/
battleShip['weapons'].cannons.name1; // Returns 'Precision Beam'
/*
In the perceding code the computer first evaluates battleShip.['weapons'].
  - We then access the cannons property by using the dot operator and the name of the
  percision beam by using the dot operator again.
*/
// End of Lesson 6: Nested Objects
//=================================================================================================
// Start of Lesson 7: Pass by Reference
/*
Objects are passed by reference, which means that we pass a variable assigned into an object into a 
function as an argument. 

The computer will intrepret the parameter name as pointing to the space in memory holding that object.
Below is an example...
*/
const mamalona = {
    type: 'Truck',
    color: 'Red'
};

let paintIt = obj => {
    obj.color = 'red'
};
paintIt(mamalona);
mamalona.color; //Returns 'red' after the paintIt function creates a .color reassignment.
// Our function paintIt permanently changes the color property of the mamalona object to 'red'.
// Below is an example of reassignment that does not work:
let veichle = {
    type: 'Sports Car',
    color: 'red'
};
let tryReassignment = obj2 => {
    obj2 = {
        identified: false,
        'transport type': 'luxury vehicle'
    }
    console.log(obj2); // Prints {identified: false, 'transport type': 'car'}
};
tryReassignment(veichle);
veichle // 

veichle = {
    identified: false,
    'transport type': 'car'
}; // Regular assignment still works.

/* 
In the code above, we declared the veichle object with let. This allows us to reassign it to a 
new object with identified and 'transport type' properties.

When we passed the veichle into that function, obj became a reference to the memory location of the veichle object. 
but not the veichle variable. This is because the obj2 parameter of the tryReassignment function is a variable
in its own right. 

The body of tryReassignment has no knowledge of the veichle variable at all. 

When we did the reassiignment in the body of tryReassignment, the obj2 variable came to refer to the memory location
of the object. 
*/
// End of Lesson 7: Pass by Reference
//===================================================================================================================
// Start of Lesson 8: Looping Through Objects
/*
We will cover how to loop through an object. Looping through objects is different than arrays
due to arrays numerical indexing. Key-value pairs are not ordered though.

We use the for...in statement to iterate through each property in an object.
*/
let starShip = {
    crew: {
        captain: {
            name: 'Lilly',
            degree: 'Computer Engineering',
            cheerTeam () {
                console.log('We got this team!');
            }
        },
        'cheif officer': {
            name: 'Dan',
            degree: 'Areospace Engineering',
            agree() {console.log('Aye Aye Captain!');}
        },
        medic: {
            name: 'Clementine',
            degree: 'Physics',
            announce(){console.log('Jets are on!');}
        },
        translator: {
            name: 'Shauna',
            degree: 'Biology',
            powerFuel(){console.log('The tank is full!');}
        }
    }
};
// for in 
for (let crewMember in starShip.crew) {
    console.log(`${crewMember}: ${starShip.crew[crewMember].name}`);
}
// End of Lesson 8: Looping Through Objects
//===================================================================================================================
// Congrats on completing the objects section!
/* 
Here is a quick review of what was learned in this lesson.
    - Objects store collections of key-value pairs.
    - Each key-value pair is a property when a property is a function it is known as a method.
    - An object literal is composed of comma-sepaerated key-value pairs surrounded by curly braces.
    - You can access, add, or edit a property within an object by using dot notation or bracket notation.
    - We can add methods to our object literals using key-value syntax with anonomous function expressions as 
    values or by using the new ES6 method syntax.
    - We can navigate complex, nested objects by chaining operators.
    - Objects are mutable-we can change their properties even when their declared with const.
    - Objects are passed by reference, when we make changes to an object passed into a function, those changes are permanent.
    - We can iterate through objects using the for...in syntax.
*/ 