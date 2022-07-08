# JavaScript_OOP

### Exercise 1#
Expanding from our exercise example during the lesson, create a parent class class Person {} with properties for name, pets, residence, and hobbies. The Person class will also have a method info() and soundOff().
Use class notation to create a class named Person
Declare the constructor() method with parameters name (string), pets (number), residence (string), and hobbies (array) allowed to be passed in
The constructor() method assigns this. properties to each parameter
Declare an addHobby() method on the class that takes in a new hobby (string), and adds it to the object's hobbies array property
Declare a removeHobby() method on the class that takes in a hobby (string), and removes the hobby from the object's hobbies array property
Declare a greeting() method that console.log's a generic greeting for a Person... ex: greeting() {console.log("Hello fellow person!")}

### Exercise 2#
Now we'll create a subclass Coder that inherits from our Person class

Use class notation to create a class named Coder that inherits from the Person class
Declare the constructor() method with parameters name (string), pets (number), residence (string), and hobbies (array) allowed to be passed in
Call the super() method inside the constructor method and pass in the given parameters
Still inside the constructor body, assign this.occupation as "Full Stack Web Developer"
Override the greeting() method to console.log a custom greeting from a coder...

### Exercise 3#
Let's create instances of our classes

Create a variable and assign a Person object to it using the new keyword followed by the class constructor
Create a variable and assign a Coder object to it using the new keyword followed by the class constructor
Call the object methods and console.log the object properties to test your work

### Exercise 4#
In this final exercise, we'll create a class that has the functionality of a basic calculator.

Create a class called Calculator
Initialize a result property within the calculator constructor with an initial value of 0
Declare methods on the class that represent basic arithmetic: add(), subtract(), multiply(), divide()
These methods should currently take in 2 parameters, and assign the result of the appropriate arithmetic based on the method name to the object's result property
Should return the result
EXTRA: if only one value is passed in, use the object's current result value as the first value in the operation
Declare a method called displayResult() that will console.log the result property stored on the object
Test your work by instantiating an object from your class (using the class constructor), and calling some of the calculator methods
