/* 
Module One Exercise: Object Syntax & Notation
Start with exercise-1.md if you haven't read it! 
*/

// YOUR WORK GOES HERE //
const elZarape = {
  name: 'El-Zarape',
  cuisines: ['Casadella', 'Burritos', 'Tacos', 'Churros'],
  numberOfSeats: 16,
  favorited: false,
};

elZarape['address'] = '2334 Fountain St';
elZarape['zipcode'] = 90026;
elZarape['accepstReservations'] = true;
elZarape['numberOfStars'] = 4.8;
elZarape.favorited = true;
elZarape.cuisines[ 4 ] = 'Horchata';



const retrieveProperty = (obj, key) => {
  if (obj.hasOwnProperty(key)) {
    return obj[key];
  } else {
   return 'The information you requested does not exist.';
  }
};

retrieveProperty(elZarape, 'cuisines');
retrieveProperty(elZarape, 'favorited');
retrieveProperty(elZarape, 'name');
retrieveProperty(elZarape, 'nickName');
retrieveProperty(elZarape, 'state');