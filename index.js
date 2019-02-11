/*
Variables defined in the test suite:
- oldID
- currentAge

You should NOT try to redefine any of the above variables.
*/

// Write your code below this line!
let newIDFormatting = function(id) {
  return id + 1000000000
};

let newID = newIDFormatting(oldID);

let ageIsValid;

if (Number.isInteger(currentAge)){
  ageIsValid = true;
} else {
  ageIsValid = false;
};

let randomNumber = (Math.random() * 20);

let randomInteger = Math.floor(randomNumber);

let randomUserID = newIDFormatting(randomInteger) + 1;
