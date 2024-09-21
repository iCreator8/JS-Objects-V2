/* 
Module Two Exercise: Object Methods
Start with exercise-2.md if you haven't read it! 
*/

//  DO NOT EDIT THE BELOW OBJECT // 
// #1
const papaJohns = {
  name: "Papa John's",
  slogan: "Better Ingredients. Better Pizza. Papa John's.",
  cuisines: ["italian", "american", "pizza"],
  pizzaToppings: {
    pepperoni: 2,
    peppers: 0.6,
    extraCheese: 1.5,
    olives: 0.5,
    bacon: 3,
    extraSauce: 1,
  },
  numberOfStars: 3.5,
  favorited: false,
  address: "555 Main Street",
  zipcode: 11234,
  acceptsReservations: false,
};

// DO NOT EDIT THE ABOVE OBJECT // 

// YOUR WORK GOES HERE // 

// #2
function grabCategories(obj) {
  return Object.keys(obj);
}


// #3
// console.log(grabCategories(papaJohns));

// #4
// console.log(grabCategories(papaJohns.pizzaToppings));



// #5
const verifyValues = (obj, targetValues) => {
    const numberOfValues = Object.values(obj).length;

    return numberOfValues === targetValues;
};
// #6
// console.log('Number of Values of the PapaJohns Object is:', verifyValues(papaJohns, 10));

// console.log('Number of Values of the PapaJohns Object is:', verifyValues(papaJohns, 9));


// #7
const getToppingsInfo = (pizzaPlace) => {
return Object.entries(pizzaPlace.pizzaToppings);
};

// console.log(getToppingsInfo(papaJohns)); 

// #8
papaJohns.printAd = function (pickedKey, pickedValue) {

  console.log('Welcome to ' + papaJohns.name + '! We are located at ' + papaJohns.address + '. This week, we are having a sale on ' + pickedKey + ' for $' + pickedValue + '. ' + papaJohns.slogan);
};


papaJohns.printAd('Olives', 0.5);


// console.log(papaJohns.pizzaToppings);


// let pickedValue;

// for (let oneValue in papaJohns.pizzaToppings) {
//   console.log(papaJohns.pizzaToppings[oneValue]);
// }



// #9
papaJohns['address'] = '1113 Princeton dr';
papaJohns['slogan'] = 'Love what you eat!';

papaJohns.printAd = function (pickedKey, pickedValue) {

  console.log('Welcome to ' + papaJohns.name + '! We are located at ' + papaJohns.address + '. This week, we are having a sale on ' + pickedKey + ' for $' + pickedValue + '. ' + papaJohns.slogan);
};


papaJohns.printAd('Olives', 0.5);
