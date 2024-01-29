// Date is an object repersenting a moment in milliseconds starting from Jan 1, 1970.

let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toTimeString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleTimeString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON);


// Months in date is taken from 0 to 11.

//Self created date
let myCreatedDate = new Date(2023,7,15,13,9)
//let myCreatedDate = new Date("11-11-2021")
// let myCreatedDate = new Date("2023-12-1")
// console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()
// console.log(myTimeStamp) // It gives the current date in millisecs.
// //console.log(myCreatedDate.getTime()) // .getTime tells about the time from jan 1, 1970 to this date in millisecs.
// console.log(Math.floor(Date.now()/1000)); // We have got the date in seconds.
// console.log(Math.floor(myTimeStamp/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    month: 'long',
    weekday: 'long',
}
) // this is used to customize the date and time format more properly.
