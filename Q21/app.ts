

//Q21 -

//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.


// interface ko hm object ki types define krny k liy use krty hy
// type alias se bhi hm types define kr skty hy


// interface

interface Istudent {

    name :string,
    age  : number,
    rollno : number,
    student : true,
}
// object
let Student :Istudent ={

    
    name : "Huma",
    age  : 25,
    rollno : 112,
    student : true,
}

console.log(Student);
