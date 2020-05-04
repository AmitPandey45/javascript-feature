// var -> function
// let -> block
// const -> block

// Tutorial -9

// function sayHelloWithVar() {
//   for (var i = 0; i < 5; i++) {
//     console.log(i);
//   }
//   console.log(i);
// }

// function sayHelloWithLet() {
//   for (let i = 0; i < 5; i++) {
//     console.log(i);
//   }
// }

// sayHelloWithLet();

// Tutorial 10

// const person10 = {
//   name: "Mosh",
//   walk: function () {
//     console.log(person10.name + " can walk");
//   },
//   talk() {
//     console.log(person10.name + " can talk");
//   },
// };

//person10.walk();
//person10.talk();

// Tutorial 11

// const person11 = {
//   name: "Mosh",
//   walk() {
//     console.log(this);
//   },
// };

//person11.walk();

//const personWalk11 = person11.walk;
//personWalk11();

// Tutorial 12

// const person12 = {
//   name: "Mosh",
//   walk() {
//     console.log(this);
//   },
// };

// const personWalk12 = person12.walk.bind(person12);
// personWalk12();

// Tutorail 13

// const square1 = function (number) {
//   return number * number;
// };

// const square2 = (number) => number * number;

// const jobs = [
//   { id: 1, isActive: true },
//   { id: 2, isActive: true },
//   { id: 3, isActive: false },
// ];

// const activeJobs1 = jobs.filter(function (job) {
//   return job.isActive;
// });

// const activeJobs2 = jobs.filter((job) => job.isActive);

// Tutorial 14

// const person14 = {
//   talk() {
//     console.log("this", this);
//   },
//   talk1() {
//     setTimeout(function () {
//       console.log("this", this);
//     }, 1000);
//   },
//   talk2() {
//     var self = this;
//     setTimeout(function () {
//       console.log("self", self);
//     }, 1000);
//   },
//   talk3() {
//     setTimeout(() => {
//       console.log("this", this);
//     }, 1000);
//   },
// };

//person14.talk();
//person14.talk1();
//person14.talk2();
//person14.talk3();

// Tutorial 15

// const colors = ["red", "green", "blue"];
// const items1 = colors.map(function (color) {
//   return "<li>" + color + "</li>";
// });
// const items2 = colors.map((color) => "<li>" + color + "</li>");
// const items3 = colors.map((color) => `<li>${color}</li>`);

//console.log(items1);
//console.log(items2);
//console.log(items3);

// Tutorial 16

// const address = {
//   street: "",
//   city: "",
//   country: "",
// };

// const street1 = address.street;
// const city2 = address.city;
// const country2 = address.country;

// const { street, city, country } = address;

// const { street: st } = address;

// Tutorial 17

// const first = [1, 2, 3];
// const second = [4, 5, 6];
// const combined1 = first.concat(second);
// const combined2 = [...first, ...second];
// const combined3 = [...first, "a", ...second, "b"];

// const clone = [...first];
// console.log(first);
// console.log(clone);

// const firstObj = { name: "Mosh" };
// const secondObj = { job: "Instructor" };
// const combinedObj = { ...firstObj, ...secondObj, location: "Australia" };

// console.log(combinedObj);

// const cloneObj = { ...firstObj };
// console.log(cloneObj);

// Tutorial 18

// const person18 = {
//   name: "Mosh",
//   walk() {
//     console.log(this.name + " can walk");
//   },
// };

// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//   walk() {
//     console.log(this.name + " can walk");
//   }
// }

// person18.walk();
// const person18Obj = new Person("Mosh");
// person18Obj.walk();

// Tutorial 19 (term - inheritence and composition)

// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   walk() {
//     console.log(this.name + " can walk.");
//   }
// }

// class Teacer extends Person {
//   constructor(name, degree) {
//     super(name);
//     this.degree = degree;
//   }

//   teach() {
//     console.log(this.name + " can teach.");
//   }
// }

// const teacher = new Teacer("Mosh", "Msc");
// teacher.walk();
// teacher.teach();

// Tutorial 20, 21

// Default -> import ... from ''
// Named -> import { ... } from ''

import location, { Teacher, promote } from "./teacher";
const teacher = new Teacher("Mosh", "Msc");
teacher.walk();
teacher.teach();
