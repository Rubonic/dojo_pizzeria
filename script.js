function pizzaOven(crustType, sauceType, cheeses, toppings) {

    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;

    return pizza ;
}

console.log(pizzaOven("deep dish","traditional",["mozzarella"],["pepperoni","sausage"]));

//Make 2 more pizzas
console.log(pizzaOven("thin","pesto","[mozzarella]",["sundried tomatoes","pine nuts","fresh spinach","carmelized onions"]))

console.log(pizzaOven("stuffed crust","white","four cheese",["chicken","mushroom","tomato"]))



// Random Pizza Code
function randomInt(max) {
    return  Math.floor(Math.random()*max);
}

function isDuplicate(arr, num) {
   
    for(var i=0; i<arr.length-1; i++) {
        if(num = arr[i]){
            
            return true;
        }
    }
    
    return false;
}


function randomCrust() {
    return crustType[randomInt(4)];
}

var crustType = {
    0: "deepdish",
    1: "hand tossed",
    2: "stuffed crust",
    3: "thin crust"
}

function randomSauce() {
    return sauceType[randomInt(3)]
}

var sauceType = {
    0: "traditional",
    1: "pesto",
    2: "white"
}

function randomCheese() {
    return cheeseType[randomInt(5)];
}
var cheeseType = {
    0: "mozzarella",
    1: "four cheese",
    2: "blue cheese",
    3: "feta",
    4: "Kraft american"
}

// function randomToppings(num) {
//     var randNums = [];
//     randNums[0] = randomInt(11);
//         for(var i=1; i<num; i++) { 

//             randNums[i] = randomInt(11);
//                 while(isDuplicate(randNums,randNums[i])) {
//                     randNums[i] = randomInt(11);
//                 }
//         }
//         for(var j=0; j<num; j++) {
//             console.log('turning randNums[] into toppings');
//             randNums[i] = toppings[randNums[i]];
//         }
//         console.log('ready to return randNums');
//     return randNums;
//     }

var toppings = {
    0: "pepperoni",
    1: "sausage",
    2: "sundried tomatoes",
    3: "pine nuts",
    4: "spinach",
    5: "mushrooms",
    6: "chicken",
    7: "tomatoes",
    8: "onion",
    9: "fresh spinach",
    10:"carmelized onion"
}

function pizzaRand(){
    var pizza = {};
    pizza.crustType = randomCrust();
    pizza.sauceType = randomSauce();
    pizza.cheeseType = randomCheese();
    // pizza.toppings = randomToppings(3);

    return pizza;
}
console.log(pizzaRand());