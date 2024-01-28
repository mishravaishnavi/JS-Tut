const name = "Vaishnavi"
const age = 22

// console.log(name + age + "Hum");  ** Outdated version to write this.

// console.log(`My name is ${name} and my age is ${age}`); ** Modern version to write this.   This way is called string interpolation.

// console.log(`My name is ${name} and my age is ${age}.`)

// console.log(name.indexOf("v"))
// console.log(name.toUpperCase());

// console.log(name.substring(0,3));

// const newString = name.substring(0,6)   
// console.log(newString);
// Substring don't take the -ve values, while slicing did. 

const animal = "    Panda   "
console.log(animal.trim());
// Trim  removes the whitespaces before and after the strings.

const url = "https://mishravaishnavi%20github"
console.log(url.replace("%20","$30"));
// Replace replaces the first value with the second value. Mianly used when making the forms. 

console.log(url.split('%20'));

console.log(`My name is ${name} and my age is ${age}. `);