// * ============ "THIS" KEYWORD ============ * \\
// ~ Global Binding (Default) ~ //
console.log(this);

// ~ Implicit Binding ~ Don't use arrow function!!!!//
const classroom={
    name:"Virtual High Five",
    printName: function() {
        console.log("implicit:", this.name);
    },
};
classroom.printName();
// ~ Explicit Binding ~ //
const getName= function() {
    console.log("explicit:", this.name);
};

const player = {
    name:"Borgov",
    isHappy: false,
};
getName.call(player);

// ~ Constructor Binding ~ //
function Company(name) {
    this.name=name;
}

const codefi= new Company("Codefi");
console.log("CONSTRUCTOR:", codefi.name);