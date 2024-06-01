// type inference
var teacher = {
    name: "areeba",
    experience: "10",
};
console.log(teacher.name); // we notate in object with dot
console.log(teacher["experience"]); // we notate with square bracket also
//type declaration
var student;
student = {
    name: "hira",
    age: 30
};
console.log(student["name"]);
console.log(student.age);
// type union and type alias differ
var fname; // this is type union
//00step 5a node projects
// Anonymous
var Car = {
    color: "white",
    Model: 2024
};
console.log(Car.color);
console.log(Car["Model"]);
console.log(Car["color"]);
console.log(Car.Model); // type not reuse
var student1 = {
    rollNo: 12345,
    class: "Graduation"
};
console.log(student1.rollNo);
console.log(student1["class"]);
var person = {
    name: {
        firstName: "Areeba",
        lastName: "Ahmed"
    },
    age: 21,
};
console.log(person.name.firstName);
console.log(person.name.lastName);
