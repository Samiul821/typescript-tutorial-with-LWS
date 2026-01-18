// TYPE

// let playerName = "Tamim Iqbal";
// let age = 35

// console.log(playerName);

// age = "Sakib"

// let playerName;

// console.log(playerName);

// playerName = "Sakib";

// playerName = 36;

// console.log(playerName);

let a: string;

let b: number;

a = "Samiul";

b = 18;

// FUNTION

function multiply(a: number, b: number) {
  return a * b;
}

// console.log(multiply("samiul", 4));

// ARRAY
let fruts = [];

fruts.push(34);
fruts.push("Samiul");

// console.log(fruts);

let mixed = ["apple", 5, true, {}];

mixed.push({
  name: "samiul",
});

let a2: string[] = [];
let b2: number[] = [];

a2.push("Samiul");
b2.push(18);

// normal variable
let b3: string | number;

// union array
let a3: (string | number)[] = [];

b3 = "Samiul";
a3.push("Samiul", 18);

// OBJECT
let person = {
  name: "Mashrafi",
  age: 35,
  isCaptain: true,
};

// person.country = "Bangladesh"
