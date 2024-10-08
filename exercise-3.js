// Module 3 Exercise: Looping in Objects
// Start with exercise-3.md if you haven't read it!

const dominos = {
  name: "Domino's",
  cuisines: ["italian", "new york", "pizza"],
  pizzaToppings: {
    pepperoni: 2.2,
    mushrooms: 0.7,
    extraCheese: 1.4,
    onions: 0.5,
    sausage: 2.8,
    extraSauce: 0.8,
  },
  starReviews: {
    Peach: 3,
    Yoshi: 2.1,
    Bowser: 4,
    Mario: 5,
    Luigi: 5,
    Gumba564: 3.4,
    "Donkey Kong": 3.2,
  },
  favorited: true,
  address: "123 Elm Street",
  zipcode: 54321,
  acceptsReservations: true,
};

// #2
const printPizzaPlace = () => {
  for (let key in dominos) {
    console.log(key, dominos[key]);
  }
};
// printPizzaPlace();



// #3
const toppingsPriceRange = (pizzaPlaceName) => {

 const toppings = Object.values(pizzaPlaceName.pizzaToppings);

 const highestPrice = Math.max(...toppings);
 const lowestPrice = Math.min(...toppings);

 return [lowestPrice, highestPrice];
};

// const priceRange = toppingsPriceRange(dominos);
// console.log(priceRange);


// #4

const calculateAverageRating = (averageStars) => {
const reviewsSum = averageStars.reduce((acc, num) => acc + num, 0);
return reviewsSum / averageStars.length;
};

 const sumOfStars = Object.values(dominos.starReviews);
console.log(calculateAverageRating(sumOfStars));
