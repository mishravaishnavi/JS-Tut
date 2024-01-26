let name = "Vaishnavi"
let age = 22
let isApproved = true
let state;
let city = null

// number has the range of 2 to power 53
// bigint is a type that we use generally to define large number values
// string is for characters written in ""
// boolean is for true or false
// undefined is for the values that are not defined in the variable that are declared
// null is for the values that are empty and * when is aked about its typeof it gives OBJECT
// symbol is for the unique values that are not equal to any other value

console.log(typeof age)

// Conversions of data types.. Important Points to note
/*
(2+2)
*/

console.log(2 + "Vaish");
console.log(2 + true);
console.log(2 + false);
console.log(2 + undefined);
console.log(2 + null); // isko 0 count krte hain 
console.log(2 + NaN);
console.log("2" + 3);

// When we are using comparision operators then if the data types are different in operands, then we will the data types frt get 
// converted into same data type and then the comparison will be done.
//If === (strict operator) is used then data type will not be converted directly. 