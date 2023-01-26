//var  we do not use var anymore use let instead
//const  you want to use const most of the time. 
const john = "john";
let johnSleepy = true;
const johnNumber = 3;
let johnFood = null;
let johnHungry = true;

console.log(john,johnSleepy,johnNumber,johnFood);
console.log(typeof john, typeof johnSleepy, typeof johnNumber, typeof johnFood); //typeof tells you what type of data is the variable 

//Conditional Example
if(johnHungry){
  console.log(`Time to go to the store`);
}
else {
  console.log(`Nah I'm not hungry`);
}
//Ternary Operator
johnHungry ? console.log(`Time to go to the store`) : console.log(`Nah I'm not hungry`);

let johnArray = [john]; // this array contains the value of the variable john 

console.log(johnArray);
console.log(typeof johnArray[0]); // you access values in arrays with their index and square brackets

//START SPECIAL SECTION ON OBJECTS IN JAVASCRIPT
//Everything in JavaScript is an object, this is a side thing that we will go in depth for later 
let johnObject = {
  firstName: john, //this is a key value pair, similar to an array but instead of an index it has a key of firstName
  //Don't worry about functions this is just to give an example we will do this later 
  helloJohn: function(){
    console.log(`Hello John`);
  }
};
console.log(johnObject.firstName, johnObject['firstName']); // you access values in objects with their key and a period or square brackets (mostly periods), 
console.log(johnObject);
johnObject.helloJohn(); // this is calling a method aka a function that is inside of the object johnObject 

//END SPECIAL SECTION ON OBJECTS IN JAVASCRIPT 

console.log(`How long is John's Array? Length: ${johnArray.length}`)

johnArray.push(25,3,5,0,2,4,'k',123); //adds values to your array

console.log(`How long is John's Array? Length: ${johnArray.length}`)

const johnArrLast = johnArray.pop(); // removes one value from the rear and stores it in a variable

console.log(`How long is John's Array? Length: ${johnArray.length}
Removed value ${johnArrLast}
`)

johnArray.shift() //removes one value from the front

console.log(`How long is John's Array? Length: ${johnArray.length}`)

johnArray.unshift('john'); // adds values to the front of the array

console.log(`How long is John's Array? Length: ${johnArray.length}`)

johnArray.unshift(johnArray.pop()) //since pop 'returns' a value and removes it you can use it elsewhere even in another array method(function)

console.log(johnArray)

const sampleArray = [0,1,2,3,4,5,6,7,8,9]
for(let i = 0; i < sampleArray.length;i++){
  console.log(sampleArray[i]);  
}

let j = sampleArray.length -1;
while(j >= 0){
  console.log(sampleArray[j]);
  j--;
}

console.log(`
--End John Section---

`);
//--------------------------------------------------------------------------------------------

let jack = `Jack`;
let jackNumber = 8;
let jackDrink = null;
let jackSitting = true;

console.log(jack,jackNumber,jackDrink,jackSitting);
console.log(typeof jack, typeof jackNumber, typeof jackDrink, typeof jackSitting);

if(jackSitting){
  console.log(`Time to stand up`);
}
else{
  console.log(`Have a seat`);
}

jackSitting ? console.log(`Time to stand up`): console.log(`Have a seat`);

//reverse the order of this array using a loop of your choice and a combination of any of the following, .push(),.pop(),.shift(),.unshift().

let myArray = [5,'j',3,1,10,13,6,8,12];
let p = myArray.length;
while(p >= 0){
myArray.unshift(myArray.pop());
  console.log(myArray);
  p--;
}


console.log(`
--End Jack Section---

`);
//--------------------------------------------------------------------------------------------

