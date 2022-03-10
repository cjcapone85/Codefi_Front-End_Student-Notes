// * ============ OBJECTS & ARRAYS ============ * \\
// ~ OBJECTS ~ \\
// Objects stores data grouped together using key/value pairs

// ========Object Example
// const myObj={
//   key: "Value",
//   nestedInfo: {
//     nestedKey:"Nestedvalue",
//     age: 42,
//     location: {
//       state:{
//         name: "Missouri",
//         initials:"MO",

//       },
//     },
//   },
//   createdAt:new Date(),
//   printText: (text) =>console.log("text:", text),
//};
//=========== Object Property Usage
// const currState = myObj.nestedInfo.location.state.name;
// console.log("currState:", currState);

// =========Object Method Usage

// ==========Object Constructors
// const student = new Object();
// student.name="Missy";
// student.learning = "Javascript"
// console.log("student:", student);
// ~ ARRAYS ~ \\
// Arrays stores information in a list-like format

// Array Example
//const myArr= [22, "test", false, {name:"chris", age:33}, "Last"];

// Accessing Arrays

// Array Constructor

// ~ Common Array Methods ~ \\
const students = [
  { name: "Medina", grade: 88 },
  { name: "Blake", grade: 72 },
  { name: "Roscoe", grade: 58 },
  { name: "Stephanie", grade: 99 },
  { name: "Edith", grade: 93 },
  { name: "Janey", grade: 34 },
  { name: "Ivan", grade: 89 },
];

// filter
// const passingStudents=students.filter((student) => student.grade>58);
// console.log("passingStudents:",passingStudents);

// map
//students.map(student => (student.isRegistered = true));

// sort
//const sortedStudents = students.sort((a,b) => b.grade- a.grade);
//const sortedStudents = students.sort((a,b) => (b.name > a.name ? -1:1));

//console.log("sortedStudents:",sortedStudents);


// find
// const classClown = students.find(student => student.name==="Roscoe");
// console.log("classClown:", classClown);

// forEach
//students.forEach(student => console.log(student));

// some
const hasFailingStudents = students.some(student => student.grade< 59)
console.log("hasFailingStudents:", hasFailingStudents);

// every
const hasAllFailingStudents = students.every(student => student.grade< 59)
console.log("hasAllFailingStudents:", hasAllFailingStudents);
