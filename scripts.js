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