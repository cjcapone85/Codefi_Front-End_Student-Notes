// let students: string[]= ['one', 'two'];

// let mixedBag: any[];

// mixedBag = [2,"hello", false];

//  //Objects

// let student: {
//     name: string;
//     age: number;
//     isStudent: boolean;
// };

// student = {
//     name: "James",
//     age: 33,
//     isStudent: true
// }

//  // Inference & Unions

// let course = "Codefi Coding Bootcamp";
// //course = 101

// let bootcamp: string | number;

// bootcamp = "Codefi Coding Bootcamp";
// bootcamp = 101

//  // Type Aliases

// type CodefiPerson = {
//     name: string;
//     age: number;
//     isStudent: boolean;
// }

// let randomStudent: CodefiPerson = {
//     name: "James",
//     age: 33,
//     isStudent: true
// }

// let currCodeCoach: CodefiPerson = {
//     name: "Chris",
//     age: 99,
//     isStudent: false,
// };

// // Function & Parameters

// function add(a: number,b: number) {
//     return a+b;
// }

// function printName(name: string) {
//     console.log(name)
// }

// // Generics

// function getId<T>(value:T): T {
//     return value
// }

// let userOneId= getId("stringId");
// let userTwoId = getId(12345);
// let userThreeId = getId(true);

// Classes & Interfaces

interface StudentInterface {
    first:string;
    last: string;
    enroll: (courseName:string) =>void;
    listCourses: () => string[];
}
class Student implements StudentInterface {
    constructor(
        public first:string,
        public last:string,
        private courses:string[]
        ) {}
}
enroll(courseName: string) {
    this.courses.push(courseName);
}

listCourses() {
    console.log("this.courses:",this.courses)
    return this.courses.slice()
}

const studentOne = new Student("Will","Wilder",["Codefi Front-End Bootcamp"])