document.write("JavaScript Works!");
console.log("Hello console!");
console.warn("This is only a test!");

let myName = "Grif";
let workFromHome = true;
let remoteJob = true;
let remote = workFromHome && remoteJob;
let side = 15;
let radius = 10;
let a = "My Name is ";
a += myName;
let squareArea = side ** 2;
let squarePerimeter = 4 * side;
let circleArea = Math.PI * radius ** 2; 
let circlePerimeter = 2 * Math.PI * radius; 

console.log(a);
console.log(`I work from home? ${remote}`);
console.log(`The length of each side of the square is ${side}`);
console.log(`The radius of the circle is ${radius}`);
console.log(`The area of the square is ${squareArea} and the perimeter is ${squarePerimeter}`);
console.log(`The area of the circle is ${circleArea} and the perimeter is ${circlePerimeter}`);

let travelOptions = ["foot", "bike", "car", "airplane"];
console.log("The Travel Options are:");
console.log(`1) ${travelOptions[0]}`);
console.log(`2) ${travelOptions[1]}`);
console.log(`3) ${travelOptions[2]}`);
console.log(`4) ${travelOptions[3]}`);

let travelType = prompt("How would you like to travel?");
let distance = 100;
let time = 0;
let cost = 0;

console.log(`Travel Type: ${travelType}`);
if ( travelType === "foot") {
    console.log("Walking is free! Speed is 3mph.");
    cost = 0;
    time = distance / 3;

} else if (travelType === "bike") {
    let rentBike = prompt("Do you need to rent the bike? (yes or no)");
    if (rentBike === "yes") {
      console.log("Bike rental is $45! Speed is 10mph.");
      cost = 45;
    } else {
      console.log("Biking is free! Speed is 10mph.");
      cost = 0;
    }
    time = distance / 10;
  
} else if ( travelType === "car") {
    console.log("Driving is $0.25/mi. Speed is 60mph.");
    cost = 0.25 * distance;
    time = distance / 60;

} else if ( travelType === "airplane") {
    let passengerCount = prompt("How many passengers?"); 
  if (passengerCount >= 1) {
    cost = 0.1 * distance * passengerCount;
  } else {
    console.log("Flying is $0.10/mi. Speed is 400mph");
    cost = 0.10 * distance;
  }
    time = distance / 400;

  } else {
    console.log(`Sorry. ${travelType} is an invalid option.`);
}

console.log(`Traveling ${distance} miles by ${travelType} took ${time} hours and cost $${cost}!`);

let costBar = "Cost: ";
for (let i = 1; i < cost; i++) {
    costBar += "$";
}
console.log(costBar);

let timeBar = "Time: ";
for (let i = 1; i < time; i++) {
    timeBar += "/";
}
console.log(timeBar);