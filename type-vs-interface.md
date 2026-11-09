Title: The core differences between type aliases and interface in TypeScript

Introduction : Type Alias এবং Interface হলো TypeScript এর এমন দুটি Feature যার সাহায্যে আমরা custom type তৈরি করতে পারি । যা আমাদের Code কে আরো বেশি type safety করে তোলে । 

Body:

Type Alias হলো এমন একটি feature যার সাহায্যে আমরা type keyword ব্যবহার করে নতুন একটি
type তৈরি করতে পারি । এটি মূলত object , primitive , union , literal type ইত্যাদির ক্ষেত্রে ব্যবহার করা হয় । 

Object type

type User = {
    name: string;
    age: number;
}

const user1: User = {
    name: "Shahriar Nafis",
    age: 21
}

Union type

union + literal type

type Mode = "dark" | "light";

const mode: Mode = "dark";


Interface হলো এমন একটি Feature যার সাহায্যে আমারা একটি Object এর একটি structure তৈরি করে থাকি । এর ভিতর আমরা নির্দিষ্ট করে দেই object এ কী কী property থাকবে এবং তাদের type কি হবে । 

interface Student{
    name: string;
    age: number;
    classRoll: number;
    department: string;
}

const student1: Student{
    name: "Shahriar Nafis",
    age: 21,
    classRoll: 25,
    department: "Social Work"
}


type alias Union এবং intersection types support করে যেমন ঃ

type Status = "success" | "error";

type Person = {
    name: string;
};

type Employee = Person & {
    salary: number;
};

অপরদিকে interface এর extends keyword ব্যবহার করে আমরা অন্য আরেকটি interface এর property inherit করতে পারি । আবার একই নামে একাধিক interface তৈরি করলে interface গুলো merge হয়ে যায় । 

interface Person {
    name: string;
}

interface Employee extends Person {
    salary: number;
}

interface address{
    city:string;
}

interface address{
    roadNumber: number;
}

Conclusion: 

Type alias এবং interface দুটোই custom types তৈরি করতে ব্যবহার করা হয় । যেখানে Object structure তৈরি করার ক্ষেত্রে interface ব্যবহার করা ভালো। অপরদিকে union, intersection এবং primitive types-এর ক্ষেত্রে type alias ব্যবহার করা ভালো।