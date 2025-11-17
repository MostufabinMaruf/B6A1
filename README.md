১. TypeScript এ ইন্টারফেস এবং টাইপ এর মধ্যে পার্থক্য 

:=>ইন্টারফেস (Interfaces):
interface কীওয়ার্ড ব্যবহার করে ডিক্লেয়ার করতে হয়
এক্সটেন্ড করা যায় (extends ব্যবহার করে)
ডিক্লারেশন মার্জিং সাপোর্ট করে (একই নামের multiple interface automatically merge হয়)
প্রধানত অবজেক্টের শেপ ডিফাইন করতে ব্যবহার করা হয়

interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  employeeId: number;
}

=> টাইপ এলিয়াস (Type Aliases):
1. type কীওয়ার্ড ব্যবহার করে ডিক্লেয়ার করতে হয়
2. ইউনিয়ন, ইন্টারসেকশন এবং অন্যান্য টাইপ অপারেশন করতে পারে
3. প্রিমিটিভ টাইপের এলিয়াস তৈরি করতে পারে

type ID = string | number;
type Person = {
  name: string;
  age: number;
};


২. keyof কীওয়ার্ডের ব্যবহার : 
keyof টাইপ অপারেটর একটি অবজেক্ট টাইপের key গুলোর ইউনিয়ন টাইপ রিটার্ন করে।

উদাহরণ:
interface Person {
  name: string;
  age: number;
  email: string;
}

type PersonKeys = keyof Person; // "name" | "age" | "email"

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const person: Person = {
  name: "John",
  age: 30,
  email: "john@example.com"
};

const name = getProperty(person, "name"); // Valid
const age = getProperty(person, "age");   // Valid
// const invalid = getProperty(person, "invalid"); // Error

৩. any, unknown, এবং never টাইপের পার্থক্য: 

1. যেকোনো টাইপের ভ্যালু assign করা যায়
2. TypeScript এর টাইপ চেকিং bypass করে

let variable: any = "hello";
variable = 42;        // Valid
variable = true;      // Valid

unknown:

1. যেকোনো টাইপের ভ্যালু assign করা যায়
2. কিন্তু সরাসরি ব্যবহার করা যায় না (type checking required)
3. Type-safe alternative to any

let variable: unknown = "hello";
if (typeof variable === "string") {
  let length: number = variable.length; // Valid
}

never:

1. কোনো ভ্যালুই assign করা যায় না
2. সাধারণত error throw করা ফাংশন বা infinite loop এর জন্য ব্যবহার করা হয় .

   
function throwError(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while(true) {}
}

৪. TypeScript এ Enum এর ব্যবহার: 

enum Direction {
  Up,       
  Down,
  Left,  
  Right 
}

console.log(Direction.Up);    // 0
console.log(Direction[0]);    // "Up"

৫. ইউনিয়ন এবং ইন্টারসেকশন টাইপের উদাহরণ
1. ইউনিয়ন টাইপ (Union Types):
2. একটি ভেরিয়েবল একাধিক টাইপের হতে পারে।

type StringOrNumber = string | number;
function printId(id: StringOrNumber) {
  console.log(`ID: ${id}`);
}

printId(101);        // Valid
printId("202");      // Valid
// printId(true);    // Error


ইন্টারসেকশন টাইপ (Intersection Types):
একাধিক টাইপের প্রোপার্টি combine করে।

interface Person {
  name: string;
  age: number;
}

interface Employee {
  employeeId: number;
  department: string;
}

type EmployedPerson = Person & Employee;

const employee: EmployedPerson = {
  name: "Alice",
  age: 28,
  employeeId: 12345,
  department: "Engineering"
};
