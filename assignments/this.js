/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Binding: "this" is used to refer to the entire window/console object
* 2. Implicit binding: "this" is used to refer to the object that is passed into the function by a preceding dot
* 3. New binding: When a function is used to create new objects, "this" refers to the items in the new objects
* 4. Explicit binding: "this" refers to the new object that is introduced by .call or .apply
*
* write out a code example of each explanation above
*/

// Principle 1
function global () {
    console.log(this);
}
global();

// code example for Window Binding

// Principle 2
// code example for Implicit Binding
const staff = {
    title: "Mrs.",
    lastName: "Ortiz",
    grade: "fifth",
    subject: "math",
    intro: function () {
        console.log (`${this.title} ${this.lastName} teaches ${this.grade} grade ${this.subject}.`);
    }
}
staff.intro();

// Principle 3
// code example for New Binding
var keyboard = function (color, brand, type) {
    this.color= color;
    this.brand=brand;
    this.type=type;
}

var piano1 = new keyboard ("black", "Roland", "FP-90");

console.log(piano1);



// Principle 4
// code example for Explicit Binding
const toDo = function () {
    console.log (`${this.task} is due on ${this.day}. `)
}

let work1 = {
    task: "Paying water bill",
    day: "Monday"
}

toDo.call(work1);