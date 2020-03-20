// const car = {
//     make: "Toyota",
//     model: "Yaris",
//     color: "silver",
//     doors: 3,
//     regPlate: "YM04 NKT",
//     year: "2004",
//     engineSize: 1.0,
//     transmission: "Manual",
//     MOT: true,
//     TAX: true
// }


// let Rosie = {
//     _name: "Rosie",
//     _hops: 0,

//     get name() {
//         return this._name;
//     },

//     get hops() {
//         return this._hops;
//     }

//     inreaseHops() {
//         this._hops++
//     }
// }

/////////////////////////////////////////////////////////////////////////////////
////////////////////////////// Alternate method/////////////////////////////////
// class Bunny {
//     constructor(name, legs) {
//         this._name = name,
//         this._hops = 0
//         this._legs = legs
//     }

//     get name() {
//         return this._name;
//     }
//     get hops() {
//         return this._hops;
//     }
//     increaseHops() {
//         this._hops++;
//     }
// }

/////////////////// Better Method without get and underscores //////////////
// class Bunny {
//     constructor(name, legs) {
//         this.name = name,
//         this.hops = 0
//         this.legs = legs
//     }

//     name() {
//         return this.name;
//     }
//     hops() {
//         return this.hops;
//     }
//     increaseHops() {
//         this.hops++;
//     }
// }

// const rosie = new Bunny("Rosie", 2);
// const stuart = new Bunny("Stuart", 4);
// const lizzie = new Bunny("Lizzie", 2);

// rosie.increaseHops();
// rosie.increaseHops();
// console.log(rosie);
// console.log(stuart);
// console.log(lizzie)

//////////////////////////// Activity Car /////////////////////////////

// class Car {
//     constructor(reg, hours) {
//         this.reg = reg;
//         this.hours = hours;
//         this.charged = 1.50;
//     }

//     reg() {
//         return this.reg;
//     }

//     totalCharge() {
//         return (this.hours * this.charged).toFixed(2);
//     }
// }

// const car1 = new Car("ABC", 5)
// car1.totalCharge();
// console.log(`You will be charged £${car1.totalCharge()}`)

//////////////////////// Subclasses //////////////////////////////

// class Animal {
//     constructor(name){
//         this.name = name;
//         this.hunger = 100;
//         this.thirst = 100;
//     }
//     name() {
//         return this.name;
//     }
//     hunger() {
//         return this.hunger;
//     }
//     thirst() {
//         return this.thirst;
//     }
//     eat() {
//         this.hunger--;
//     }
//     drink() {
//         this.thirst--;
//     }
// }

// class Dog extends Animal {
//     constructor(name, barks, favFood) {
//         super(name);
//         this.barks = barks;
//         this.favFood = favFood; // to add an array
//     }

//     barks() {
//         return this.barks();
//     }

//     favFood() {
//         return this.favFood();
//     }
// }

// // const dogName = new Dog("dogName", true) // normal version without array
// // To add array
// const dogName = new Dog(
//     "dogName", 
//     true,
//     ["chicken", "bones", "dog food"]
//     )

// console.log(dogName)

////////////////////////// Activity new ///////////////////////////////

// class Codenation {
//     constructor(name, age, salary, position){
//         this.name = name;
//         this.age = age;
//         this.salary = salary;
//         this.position = position;
//     }
//     name(){
//         return this.name;
//     }
//     age(){
//         return this.age;
//     }
//     salary(){
//         return this.salary;
//     }
//     position(){
//         return this.position
//     }
// }

// class Student extends Codenation {
//     constructor(name, age, type, course) {
//         super(name, age);
//         this.type = type;
//         this.course = course;
//     }
//     type() {
//         return this.type;
//     }
//     course() {
//         return this.course;
//     }
// }

// const john = new Student("John", 20, "Self funded", "Cyber")
// console.log(john);

///////////////////// Activity(1) Car Park- partially copied from above/////////////

// class Car {
//     constructor(reg, hours) {
//         this.reg = reg;
//         this.hours = hours;
//         this.charged = 1.50;
//     }

//     reg() {
//         return this.reg;
//     }

//     totalCharge() {
//         return (this.hours * this.charged).toFixed(2);
//     }
// }

// class Staff extends Car {
//     constructor(reg, hours, staffNumber, credits) {
//         super(reg, hours);
//         this.staffNumber = staffNumber;
//         this.credits = credits;
//         this.balance = 100;
//     }
//     credits() {
//         return this.credits;
//     }
    
//     newAmountCharge() {
//         return (super.totalCharge() - (this.credits * this.charged));
//     }

//     updateBalance() {
//         return this.balance = this.balance - this.newAmountCharge();
//     }
// }

// const staff1 = new Staff("ABC", 11, "98765", 1)

// console.log(`You will be charged £${staff1.newAmountCharge().toFixed(2)}. Your remaining balance is £${staff1.updateBalance()}.`)
// console.log(staff1)

////////////////////////// Activity (2) Cyber Pet ////////////////
///// Below copied from object.js file week 1 ////
const pet = {
    name: "Smith",
    typeOfPet: "horse",
    age: 33,
    colour: "black",
    energy: 40,
    health: 100,
    hunger: 40,
    thirst: 20,
    toilet: false,

    eat(){
        if(this.hunger < 50){
            return(`${this.name} is eating.`);
            this.hunger = this.hunger + 20;
        } else {
            return(`${this.name} is not hungry`)
        }
    },
    drink(){
        if(this.thirst < 50){
            return(`${this.name} needs to drink.`)
        } else {
            return(`${this.name} is not thirsty.`)

        }
    },
    energyLevel(){
        if(this.energy < 20){
            return(`${this.name} needs to sleep.`);
        } else if (this.energy >= 20 && this.energy <= 80){
            return(`${this.name} wants to play.`);
        } else {
            return(`${this.name} needs to train.`)
        }
    },
    toilet(){
        if(this.toilet == true){
            return(`${this.name} needs to go toilet.`);
        } else {
            return(`${this.name} does not need to go toilet.`);
        }
    }
}
console.log(pet.eat());

/////// Starting avtivity (2) from above code below//////

class Pet {
    constructor(typeOfPet, name){
        this.typeOfPet = typeOfPet;
        this.name = name;
        this.boredom = 0;
        this.hunger = 0;
        this.thirst = 0;
        this.toilet = 0
    }

    typeOfPet() {
        return this.typeOfPet;
    }
    
    
}

// class Car {
//     constructor(reg, hours) {
//         this.reg = reg;
//         this.hours = hours;
//         this.charged = 1.50;
//     }