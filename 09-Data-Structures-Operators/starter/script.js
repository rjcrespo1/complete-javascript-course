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
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

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
};

// +++ 103. DESTRUCTURING ARRAYS

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
// console.log(a, b, c)

const [x, y, z] = arr; // this destructuring is the same as the above (lines 34-36) but simplified and much cleaner.
console.log(x, y, z);
/* Whenever JS sees the array brackets [] on the left side of the equals sign, it knows that it should be doing destructuring. (USE CONST IN THIS INSTANCE ALWAYS)*/

const [first, second] = restaurant.categories; // -> the variables "first and second" don't mean anything. That is just what we named them. First and second items from the array.
console.log(first, second);
/* If I wanted to skip an item in the array when destructuring, I can simply use commas with empty spaces in between. Ex: [first, , third] */
// const [first, , third] = restaurant.categories;
// console.log(first, third);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching variables:
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary); // -> What we just did is the same as the following below: (also would have to change const to let in the original to be able to reassign)

[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive two return values from a function:
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested destructuring:
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j); // -> so the variable "j" will return the full array of [5, 6]
const [i, , [j, k]] = nested;
console.log(i, j, k); // -> by destructuring further, we get the nested array returned as individual items ==> "2, 5, 6"

// Default values:
const [p=1, q=1, r=1] = [8, 9];
console.log(p, q, r); // -> by setting default values to our variables, any variable that is leftover (nothing to assign it to), will display as the default value