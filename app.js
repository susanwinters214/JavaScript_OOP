//exercise 1
class Person{
    constructor(name, pets, residence, hobbies){
        this.name = name;
        this.pets = pets;
        this.residence = residence;
        this.hobbies = hobbies;
    }
   
    info(){ }
    soundOff(){}
    
    addHobby(hobby){
        this.hobbies.push(hobby)
    }

    removeHobby(rmhobby){
        let indexToRemove = this.hobbies.indexOf(rmhobby);
        this.hobbies.splice(indexToRemove, 1); //only remove 1 hobby
        console.log(Person.hobbies);
     }

    greeting(){
        console.log("Hello fellow person!");
    }
}


//exercise 2
class Coder extends Person{
    constructor(name, pets, residence, hobbies,occupation) {
        super(name, pets, residence, hobbies);
        this.occupation = occupation;
    }
    greeting(){
        console.log("Hello, I am a coder.");
    }
}

//exercise 3
let driver = new Person("Tina", 1, "Dallas", ["running", "reading", "boxing"]);
driver.addHobby("karate");
driver.removeHobby("reading");
driver.greeting();
console.log(driver);

let coder = new Coder("Susan", 1, "Dallas", ["art", "coding", "camping", "flying drones"], "Full Stack Web Developer");
coder.addHobby("water volleyball");
coder.removeHobby("camping");
coder.greeting(console.log("Hey coder, what did you code today?"));
console.log(coder);








//exercise 4 - Calculator
class Calculator{
    result=0;

    add(a,b){
        let res;
        if (b== undefined){res=this.result + a;}
        else {res=a + b;}
        this.result = res; return this.result;}

    subtract(a,b){
        let res;
        if (b== undefined){res=this.result - a;}
        else {res=a - b;}
        this.result = res; return this.result;}

    multiply(a,b){
        let res;
        if (b== undefined){res=this.result * a}
        else {res=a * b;}
        this.result = res; return this.result;}
       
    divide(a,b){
        let res;
        if (b== undefined){res=this.result / a}
        else {res=a / b;}
        this.result = res; return this.result;}


    display(){console.log(this.result);}
}

let calc = new Calculator();
(calc.add(15,3));calc.display();
(calc.subtract(15,3));calc.display();
(calc.multiply(15,3));calc.display();
(calc.divide(15,3));calc.display();


