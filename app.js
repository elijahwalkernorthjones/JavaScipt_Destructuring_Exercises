const teaOrder = {
    variety: 'oolong',
    teaName: 'winter sprout',
    origin: 'taiwan',
    price: 12.99,
    hasCaffeine: true,
    quantity: 3
}

//selecting and declaring key/value pairs within the object
//longhand way
// const price = teaOrder.price;
// const origin = teaOrder.origin;
// const hasCaffeine = teaOrder.hasCaffeine;

//destructured - shorthand way
const {price, origin, hasCaffeine} = teaOrder;
// if I type in 'price' it will print -> 12.99 
//shorthand way of declaring variables of key/value pairs within objects

// to change the key names goes as follows
// let's say I wanted to change the teaName key to teaStrain.
const {teaName: teaType} = teaOrder;


//if I wanted to create a 'checkout/shopping-cart' function 

function checkout(tea){
    const {quantity =1, price} = tea;
    return quantity * price;
}

checkout(teaOrder);

//---------------------------------------------------------

//Destructuring Arrays
// const [first, second, third, ...rest]
//use array square brackets instead of curly braces
const students = [
    { name: 'drake', gpa: 4.6},
    { name: 'Henrietta', gpa: 4.4},
    { name: 'Tung', gpa: 4.0},
    { name: 'Harry', gpa: 3.8},
    { name: 'Ant', gpa: 3.2},
]
const [topStudent, second, ...bottomOfBarrelStudents] = students // prints the first key-object pair
// topStudent = {name: drake, gpa: 4.6}
// second = {name: Henrietta, gpa: 4.4}
// bottomOfBarrelStudents = 
    // { name: 'Tung', gpa: 4.0},
    // { name: 'Harry', gpa: 3.8},
    // { name: 'Ant', gpa: 3.2},

// you can also skip indices by concatenating commas.
// const [first,,third,,,sixth]


//-------------------------------------------------------------
//Function Destructuring
//use bracket notation in the function parameters themselves.

const swimMeetResults = ['Tammy', 'Jessica', 'Violet'];

function awardMedals([gold, silver, bronze]){
    return {
        gold,
        silver,
        bronze
    }
}

//-------------------------------------------------------------
//Nested Destructuring

const movies = {
    Ratings : [
        { Source: 'IMDB', Value: '8.5/10'},
        { Source: 'Rotten Tomatoes', Value: '93%'}
    ]
}

//in order to select Value inside Ratings.
const {Ratings: [ {Value: imdbRating}]} = movies;

const ratings = movies.Ratings;



//-------------------------------------------------------------
//EXERCISES

//Object Destructuring 1

// 8
// 1846


//Object Destructuring 2
// {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}

// Object Destructuring 3
// Your name is Alejandro and you like purple
// Your name is Melissa and you like green
// Your name is undefined and you like green

// Array Destructuring 1
// Maya
// Marisa
// Chi

// Array Destructuring 2
// "Raindrops on roses"
// "whiskers on kittens"
// ["Bright copper kettles", "warm woolen mittens", "Brown paper packages tied up with strings"]

// Array Destructuring 3
// [10,30,20]

// ES2015 Object Destructuring
const obj = {
    numbers: {
      a: 1,
      b: 2
    }
  };
  
  const {a,b} = obj.numbers

  //ES2015 One Line array swap with destructuring
  [arr[0], arr[1]] = [arr[1], arr[0]]

  //raceResults()
  const raceResults = ([first, second, third, ...rest]) => ([first, second, third, rest])
