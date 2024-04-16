'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex){
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];   
    },

    orderDelivery: function ({starterIndex, mainIndex, time, address}){
        console.log(`Order received! ${this.starterMenu[starterIndex]} and
        ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },
   orderPasta: function(ing1,ing2, ing3){
    console.log(`Here is your delicitous pasta with ${ing1}, ${ing2} and ${ing3}`);
    },
    orderPizza: function(mainIngredient, ...otherIngredients){
      console.log(mainIngredient);
      console.log(otherIngredients);
    },  

};

restaurant.orderDelivery({
    time: '22:30',
    address: 'Via del Sole, 21',
    mainIndex: 2,
    starterIndex: 2,
});

// Mainly using the curly braces to destructure, then provide the exact variable names that match the property names
// order of elements in the object does not matter, as well as in destructuring
const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);


//helpful feature when dealing with third party data as such as APIs-> being able to give different names to the variables.
const {name:restaurantName, openingHours: hours, categories:tags} =restaurant;
console.log(restaurantName, hours, tags);

//defaul values, for the case that we are trying to read default value that does not exist on the object

restaurant.menu // this will be undefined, as we dont have it as ''menu '' in the object
// setting up a default value-> if does not exist- give it an empty array [] 
const {menu = [], starterMenu: starters = []}=restaurant;
// console.log(menu,starters);
//this is when u dont have hardcoded data here, hence u set up an empty array so you dont have  undefined error message

//Mutating variables while destructuring objects

// let a = 111;
// let b = 999;
// const obj = {a: 23, b: 7, c:14}; // here we want a to become 23, and b =7

//  ({a, b} = obj); // you need to wrap the mutating variables inside (), otherwise it will become an error upon execution
// console.log(a,b);

//nested objects
//take from the object opening hours the insider object friday and use them

const{fri: {open: o, close:c}} = openingHours; // you can use this syntax in order to destructure it even further. 
// console.log(o, c); 



//// SPREAD OPERATOR //////////



// const arr = [7, 8, 9];

//creating new array with elements at the beginning

// const badNewArr = [1,2, arr[0],arr[1], arr[2]];
// console.log(badNewArr);
//Since ES6 we can use the spread opetor, so we dont make it manually like the previous bad arr example.

// const newArr = [1, 2, ...arr]; // The spread operator basically does: takes every element individually from the selected array and wites it down
// console.log(newArr); // we can use it when we want to write multiple values separated with comma


// console.log(...newArr);

//creating new array at the main menu from line 13

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu); //we are not manipulating the original array, only adding and building from scratch

// Important use case of the spread operator: 
// - to create shallow copies of arrays and to merge two arrays together.

//Copy array

const mainMenuCopy = [...restaurant.mainMenu]; //shallow copy - similar to object assign 

//Join 2 arrays
const menuJoined = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menuJoined);

//spread string

const str = 'John';
const letters = [...str, ' ', 's.'];
//WE CAN ONLY SPREAD WHEN BUILDING AN ARRAY ON WHEN WE PASS VALUES IN A FUNCTION
// we can not use it in template literals, (we need multiple values separate by comma )


//from the Order pasta function
// const ingredients = [prompt("Let's make pasta! Ingredient 1? "), prompt("Ingredient 2? "), prompt("Ingredient 3? ")];
// console.log(ingredients);

restaurant.orderPasta(...ingredients);// calling the function with the spread operator


//since 2018, the spread operator works on objects!!!!!

const newReastaurant = {foundedIn: 1999, ...restaurant, founder: 'Mario'};
// console.log(newReastaurant);

//we can also make shallow copies of objects
//instead of object.assign

const restaurantCopy = {...restaurant};
restaurant.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);





// ---------------- REST OPERATOR-------------


// Under destructuing umbrealla: 


//Spread operator, because is on the RIGHT side of the assignment operator(=)
const arr = [1,2, ...[3, 4]];

//Rest because on is on the LEFT side of the assignment operator(=)
const [a, b, ...others] = [1,2,3,4,5];
// console.log(a, b, others);

const [pizza,  , risotto, ...otherfood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
// NB! Rest neeeds to be the last in the destructuring assignment.

//OBJECTS and the rest operator
const {sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

//-------Functions and rest operator

//Function that can add any number of parameters when called, 
//using for loop to do it
const add = function (...numbers){
  let sum = 0;
  for (let i = 0; i <numbers.length; i++) sum += numbers [i];
  console.log(sum);
};

add(2,3);
add(5, 3, 7, 2);
add(8,2,5,3,2,1,4);

const x = [23, 5, 7];
add(...x);

//From other pizza method

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');

// ---- ShortCircuit && || ------- 



/*there might be property on the restaurant object with the property of guests, but 
we do not know if it exists. hence we are using the ternary operator
and if it exists to display it or if it does not exist should display value of 10*/ 
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);


//taking advantage of short cirquiting and OR operator
// const guests2 = restaurant.numguests || 10
// console.log(guests2); //better way to check if its 


// Short cirquit AND operator
// when it comes to short circuit evaluation, AND works at the EXACT OPOSITE OF THE OR OPERATOR
// WHEN THE FIRST VALUE IS FALSY AND SHORT CIRCUITS and terminates execution

/*in the example below we will check  if the order pizza method exist, if it does exist
we want to call it */
if (restaurant.orderPizza){
  restaurant.orderPizza('mushrooms', 'spinach');
}

//variation to use AND operator instead of IF statement
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
//if it exist 2nd part will be operated, but if it does not it will stop 


//--- Nullish Coalescing Operator---

restaurant. numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);
// in this if we put the default value to 0, JS will till take this 10 and assign in to guests
// because 0 is a falsy value now and therefore we go to the second operator.
// introduced in ES2020, 

//nullish values are null and undefined ( it does not work with the 0 and '') only nullish values will short-circuit the evaluation
const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect);


// ---Logical Assignment Operators---

const rest1 = {
  name: 'Capri',
  numGuests: 0, //if its 0 here- as its falsy value, it will work fine and assign a value

};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi'
};

//setting default number of guests for the objects that do not have that property

rest1.numberGuests = rest1.numGuests || 10; // Using OR operator with short circuiting
rest2.numberGuests = rest2.numGuests || 10; 


// OR assignment operator => this operator assigns a value to variable if that current variable is falsy
rest1.numGuests  ||= 10;
rest2.numGuests  ||= 10; //using the assign operator in more optimal way

//NULLISH assignment operator ?? (null or undefined)
// In order not to have 0 as a falsy value, we needto use the nullsish operator  so the guests can behave expectedly

rest1.numGuests  ??= 10;
rest2.numGuests  ??= 10;

// AND assignment operator- to assign a value to a variable if its currently thruthy
rest2.owner = rest2.owner && '<Annonymus>';
//short circuiting AND- when the first value is falsy and immediately returns, but since its truthy and the second one is returned
//we can make it better like: 

rest2.owner &&= '<Anonymous>';

//-------- Looping Arrays: The for of Loop--------- 

const menu = [...restaurant.starterMenu, ... restaurant.mainMenu];

for(const item of menu) console.log(item);
//this loop will loop over the entire array and for each adoration it will give us access to the current array element that we can specify-> in our case item
// it will log each element one by one
// we can still use continue and break  keywords. 

//if we want the current index instead of current element, you can get both but u have to do this
for (const item of menu.entries()){
  console.log(`${item[0]+1}:${item[1]}`);
}
// console.log(...menu.entries());

//Or we can use destructuring to make it simpler like: 

for (const [i, el] of menu.entries()){
  console.log(`${i+1}:${el}`);
}

//------------ Enhanced Object Literals ----------

//ES6 introduced the object literal- its literal due to its written in the code
//there are 3 ways to write it 

//if there is an object take away from it (removing opening hours and making second object)
openingHours: openingHours, //inside the object
//with enhanced object literals ES6:
openingHours,

//2nd one- writing methods- we do not have to make a property and set it to function expressions. we can set it 
//removing function and semicolons , vs code changing the method colors

//3rd we can compute property names- calculate->
const weekdays = ['mon', 'tue', 'wed']


//----------- Optional Chaining --------------

console.log(restaurant.openingHours.mon); // this will be undefined, since the property of mon/monday  does not exist

//in order to check we need need
if(restaurant.openingHours.mon)
console.log(restaurant.openingHours.mon.open);
//this is checking only for 1 propery- only for monday if the restaurant works

//ES 2020- Optional chaining
// if certain property does not exist in the object then undefined is returned immediately
console.log(restaurant.openingHours.mon?.open);
//only if the property is before the question mark exist then it will be read, if not undefined it will be thrown 

//multiple opening chainings
console.log(restaurant.openingHours.mon?.open);

//Example

const days = ['mon','tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

//to loop over this array an log to the console if the restaurant is open or closed on those days 

for (const day of days){

  const open = restaurant.openingHours[day]?open ?? 'closed':
   //day comes dynamically from the array above
  console.log( `On ${day} we open at ${open}`);

} // works with nullish values, hence we used the nullish coalescing operator

//Methods- we can check if a method actually exist before we call it

console.log(restaurant.order?.(0,1)?? 'Method oes not exist');

//Even works on arrays- to check if its empty 

const users = [
  {name:'John', email: 'hey@john.io'}
];

console.log(users[0]?.name ?? 'user array empty');
//Optional chaining operator that we almost all the time we use with the nullish coalescing operator so that we can do somethin in case that we can a results from the array or object taht we checking.




//----------------- Looping Objects: Object Keys, Values, and Entries------

//looping over propery names- called keys

//we are looping over an array insread of the object directly

const properties = Object.keys(openingHours);
console.log(properties);

//how many days are open
let openStr = `we are open on ${properties.length} days`)



for (const day of properties){
  openStr += `${day},`;
}
console.log(openStr);

//property VALUES

const values = object.values(openingHours);
console.log(values);

//to loop over the entiries objects -> the key and the value
const entries = Object.entries(openingHours);
console.log(entries);

for(const [key,{open,close}] of entries){ //since values is object we are destructuing it we use open, close
  console.log(`on ${key} we open at ${open} and close at ${close}`);
}