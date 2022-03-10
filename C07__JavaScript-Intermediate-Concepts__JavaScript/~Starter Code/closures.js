// * ============ CLOSURES ============ * \\
// ~ DEMO 1 START ~ \\
function outer(){
    let myVar = "Outer Function Scope"

    function inner() {
        console.log("Inner Function:", myVar)
    }
    return inner;
}

const outerFuncCall = outer();
// console.log("outerFuncCall:", outerFuncCall)
outerFuncCall();

// ~ DEMO 1 END ~ \\

// ~ DEMO 2 START ~ \\
function greeting(message) {
    return function(name){
        return `${name}!${message}`;
    };
}

const basicWelcome = greeting("Welcome.");
const welcomeJohn= basicWelcome("John");
//console.log(welcomeJohn);
// ~ DEMO 2 END ~ \\

// ~ DEMO 3 START ~ \\

// ~ DEMO 3 END ~ \\
