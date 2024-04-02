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

  order: function(starterIndex, mainIndex){
    return(this.starterMenu[starterIndex],this.mainMenu[mainIndex]);
  }





  // openingHours: {
  //   thu: {
  //     open: 12,
  //     close: 22,
  //   },
  //   fri: {
  //     open: 11,
  //     close: 23,
  //   },
  //   sat: {
  //     open: 0, // Open 24 hours
  //     close: 24,
  //   },
  // },
};


const arr = [2,3,4];
const a = arr [0];
const b = arr [1];
const c = arr [2];

//Destructuring array

const [x, y, z] = arr; //Destructuring from the rightside- its not an array, you need to declare variables with const.
console.log (x, y, z);
//The original array is not destroyed.


//const [first, second] = restaurant.categories;
// console.log(first, second);

//if we want to select for example 1st and 3rd, we will need to leave a hole when destructuring
const [first, ,second] = restaurant.categories;
console.log(first, second);
// hence it scips the second element and the third element goes on the place of the second
// from 'Italian Pizzeria' ->  ' Italian Vegetarian' (which is element number 3)


let [main, secondary] = restaurant.categories;
console.log (main, secondary);
//if we want to switch the cathegories without destructuring we will have to do it like this: 

//Switching variables
// const temp = main; // making temporary  variable in the middle.
// main = secondary;
// secondary = temp;

// with destructuring we will create an array with both of them , 
//

 [main, secondary] = [secondary, main];
 console.log(main, secondary);

 /* With destructuring we can have a function return an array 
 and then we can immediately destruct the results into different variables.
 This allows us to return multiple values from a function. */
 const [starter, mainCourse] = restaurant.order(2, 0);
 console.log(starter, mainCourse);

 //nested arrays destructuring

 const nested = [2,4, [5,6]];
//  const [i, ,j] = nested;
//  console.log(i, j);

const[ i, , [j, k]] = nested;
console.log(i, j, k );

//default values

const [p=1, q=1, r=1] = [8, 9];
console.log(p, q, r);