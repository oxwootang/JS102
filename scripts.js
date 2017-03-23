//Use this file to implement Part One of your project

//Animal User Model
//Object
var animal = {};
animal.username = "rocky";
animal['tagline']="breh";
var noises = [];
animal['noises'] = noises;
//Loops
var count = 0;
for(key in animal){
  count++;
  console.log(count);
  if(key=="username"){
    console.log("Hi my name is "+animal[key]);
  }
  else if(key=="tagline"){
    console.log("I like to say "+animal[key]);
  }
};
//Array
var noiseArray = ['quack'];
noiseArray.unshift('bark');
noiseArray.push('meow');
noiseArray[3] = 'bleh';
console.log(noiseArray.length);
console.log(noiseArray.length-1+" is the last index, and it is one less than the length of noiseArray: "+noiseArray.length);
//Nest the Array in the Object
console.log(animal);
animal.noises = noiseArray;
console.log(animal);
//Animal Collection
var animals = [];
animals.push(animal);
var quackers = { username: 'DaffyDuck', tagline: 'Yippeee!', noises: ['quack', 'honk', 'sneeze', 'growl'] };
animals.unshift(quackers);
console.log(animals);
var longNeck = { username: 'Giraffe', tagline: 'Yooooo...', noises: ['meh', 'breh', 'meow', '*munch*'] };
var shelly = { username: 'Turtle', tagline: 'Hiiiiiiii...', noises: ['.....', 'hmmm...', 'Tuuurtle'] };
animals[animals.length] = longNeck;
animals[animals.length] = shelly;
console.log(animals);
console.log(animals.length);
//Nesting
//Create a friendslist
var friends = [];
var addUsername = function(){
  var rAnimal = animals[Math.floor(Math.random()*animals.length)];
  friends.push(rAnimal.username);
  console.log(friends);
};
addUsername();
addUsername();
//Create a Relationships Object
var relationships = {};
relationships.friends = friends;
console.log(relationships);
relationships.matches = [];
relationships.matches.push(relationships.friends[0]);
console.log(relationships.matches);
for(animal in animals){
  console.log(animal);
  animals[animal].relationships = relationships;
};
console.log(animals);