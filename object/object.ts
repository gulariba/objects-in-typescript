// type inference
let teacher = {
    name : "areeba",
    experience : "10",
}
console.log(teacher.name); // we notate in object with dot
console.log(teacher["experience"]); // we notate with square bracket also

//type declaration
let student : {
    name:string,
    age:number,
}
student = {
    name: "hira",
    age : 30
}
console.log(student["name"]);
console.log(student.age);

// type union and type alias differ
let fname :string | number | boolean // this is type union
type mytype = string | number | boolean // this is type alias


//00step 5a node projects
// Anonymous
let Car : {color : string , Model : number}={
    color : "white",
    Model : 2024
}
console.log(Car.color);
console.log(Car["Model"]);
console.log(Car["color"]);
console.log(Car.Model); // type not reuse

// type alias in objects
type student = {
    rollNo : number
    class : string
}
let student1 : student = {
    rollNo : 12345,
    class : "Graduation"
}
console.log(student1.rollNo);
console.log(student1["class"]);

// nested objects //object ka andar object
type Author ={
    fname : string,
    lname : string,
}
type book = {
    author : Author,
    name : string,
}

//let myBook : book ={
//    Author = {
  //       fname : "Imran"
    //     lname : "khan" 
    //}
//}
// collection of data 
// nested objects
type personType = {
    name : {
        firstName : string;
        lastName : string
    }
    age : number;
};
let person : personType = {
    name : {
        firstName : "Areeba",
        lastName : "Ahmed"
    },
    age : 21,
}
console.log(person.name.firstName);
console.log(person.name.lastName);