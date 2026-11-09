Title: Understanding Access Modifiers in TypeScript OOP

Introduction:

Object-Oriented Programming-এ Encapsulation একটি গুরুত্বপূর্ণ বিষয় । এর সাহায্যে class এর property গুলোর access control করা যায়। public, private, protected এবং readonly modifiers ব্যবহার করেই মূলত access control করা হয় । 

Body: 

Public Modifier

class এর কোন property এর সামনে public modifier ব্যবহার করলে সেটিকে আমরা class এর ভিতর এবং বাইরে দুই জায়গা থেকেই access করতে পারি ।

class Person {
    constructor(public name:string){
        this.name = name;
    }
}

const person = new Person("Nafis ");
console.log(person.name);

Private Modifier

class এর কোন property এর সামনে private modifier ব্যবহার করলে সেটিকে আমরা শুধু class এর ভিতর থেকেই access করতে পারি ।

class BankAccount {
    constructor(private balance:number){
        this.balance = balance;
    }

    getBalance(): number {
        return this.balance;
    }
}

এখানে class-এর বাইরে থেকে balance সরাসরি access করা যাবে না।

Protected Modifier

class এর কোন property এর সামনে protected modifier ব্যবহার করলে সেটিকে আমরা class এর ভিতর এবং সেই class থেকে তৈরি করা subclass এর ভিতর access করতে পারি ।

class Employee {
    constructor(protected name:string){
        this.name = name;
    }
}

class Manager extends Employee {
    getName(): string {
        return this.name;
    }
}

Readonly Modifier

class এর কোন property এর সামনে readonly modifier ব্যবহার করলে সেটিকে আমরা access করতে পারি কিন্তু সেটির value reassign করতে পারি না ।

class Product{
    constructor(readonly id:number);
}

const product = new Product(101);
console.log(product.productId);

Conclusion: 

TypeScript-এর access modifiers OOP-এর Encapsulation এ গুরুত্বপূর্ণ ভূমিকা রাখে। যার সাহায্যে আমরা কোন property এর access এবং reassign control করতে পারি । 