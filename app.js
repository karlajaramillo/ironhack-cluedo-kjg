console.log('hello monina')

//Suspects 
let mrGreen = {
    name: "Jacob Green",
    occupation: "Entrepreneur",
    age: 45,
    description: "He has a lot of connections",
    image:
      "https://carboncostume.com/wordpress/wp-content/uploads/2017/10/mrgreen3.jpg",
    color: "green ",
  };
  
  let drOrchid = {
    name: "Doctor Orchid",
    occupation: "Scientist",
    age: 26,
    description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    image: "https://images2.minutemediacdn.com/image/upload/c_crop,h_1124,w_2000,x_0,y_50/v1560965041/shape/mentalfloss/586055-hasbro.jpg?itok=x4QQWTxa",
    color: "white",
  };
  
  let profPlum = {
    name: "Victor Plum",
    occupation: "Designer",
    age: 22,
    description: "Billionaire video game designer",
    image:
      "https://vignette.wikia.nocookie.net/cluedo/images/a/a4/2016C6.jpg/revision/latest?cb=20200927103539",
    color: "purple",
  };
  
  
  let missScarlet = {
    name: "Kasandra Scarlet",
    occupation: "Actor",
    age: 31,
    description: "She is an A-list movie star with a dark past",
    image: "https://www.radiotimes.com/uploads/images/Original/111967.jpg",
    color: "red",
  };
  
  let mrsPeacock = {
    name: "Eleanor Peacock",
    occupation: "Socialité",
    age: 36,
    description:
      "She is from a wealthy family and uses her status and money to earn popularity",
    image: "https://vignette.wikia.nocookie.net/cluedo/images/b/b0/2016C5.jpg/revision/latest?cb=20200927103538",
    color: "blue",
  };
  
  let mrMustard = {
    name: "Jack Mustard",
    occupation: "Retired Football player",
    age: 62,
    description:
      "He is a former football player who tries to get by on his former glory",
    image:
      "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg",
    color: "yellow",
  };
  

  // ### Weapons
  
  let rope = {
    name: 'rope',
    weight: 10,
  };
  
  let knife = {
    name: 'knife',
    weight: 8,
  };
  
  let candlestick = {
    name: 'candlestick',
    weight: 2,
  };
  
  let dumbbell = {
    name: 'dumbbell',
    weight: 30,
  };
  
  let poison = {
    name: 'poison',
    weight: 2,
  };
  
  let axe = {
    name: 'axe',
    weight: 15,
  };
  
  let bat = {
    name: 'bat',
    weight: 13,
  };
  
  let trophy = {
    name: 'trophy',
    weight: 25,
  };
  
  let pistol = {
    name: 'pistol',
    weight: 20,
  };
  
  
  // ### Rooms
  
  let diningRoom = {
    name: "Dining Room",
  };
  let conservatory = {
    name: "Conservatory",
  };
  let kitchen = {
    name: "Kitchen",
  };
  let study = {
    name: "Study",
  };
  let library = {
    name: "Library",
  };
  let billiardRoom = {
    name: "Billiard Room",
  };
  let lounge = {
    name: "Lounge",
  };
  let ballroom = {
    name: "Ballroom",
  };
  let hall = {
    name: "Hall",
  };
  let spa = {
    name: "Spa",
  };
  let livingRoom = {
    name: "Living Room",
  };
  let observatory = {
    name: "Observatory",
  };
  let theater = {
    name: "Theater",
  };
  let guestHouse = {
    name: "Guest House",
  };
  let patio = {
    name: "Patio",
  };
  
  
  
  // Array of objects
  // Array of suspects
  let suspectsArray = [
    mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard
  ]
  
  // Array of weapons
  let weaponsArray = [
    pistol, trophy, bat, axe, poison, dumbbell, candlestick, knife, rope
  ]

  // Array of rooms
  let roomsArray = [
    diningRoom, conservatory, kitchen, study, library, billiardRoom, lounge, ballroom, hall, spa, livingRoom, observatory, theater, guestHouse, patio
  ]

//   console.log(weaponsArray.length)
//   console.log(weaponsArray)
  
  
// ### 1 - Create the mystery using Random
//   let randomRoom = roomsArray[Math.floor(Math.random() * roomsArray.length)];
//   let randomWeapon = weaponsArray[Math.floor( Math.random() * weaponsArray.length)]
//   let randomSuspect = suspectsArray[Math.floor(Math.random() * suspectsArray.length)];
//   console.log(randomRoom, randomWeapon, randomSuspect);
  
//Gets random item from each array and constructs the mystery 
// Everytime I call the function, this function picks a random suspect, weapon and room.
// Math.floor --> round the number
// Math.random --> pick a number between 0 and 1
// array.length --> the items of the array and multiply with the Math.random, 
// so if the length is 5, the Math.random will be between 0 and 4.
// whenever we call this function, it will return the object
function pickMystery(){
let suspect = suspectsArray[Math.floor( Math.random() * suspectsArray.length)]
let weapon = weaponsArray[Math.floor( Math.random() * weaponsArray.length)]
let room = roomsArray[Math.floor( Math.random() * roomsArray.length )]

return { suspect, weapon, room} // return gives us the object
}

// mystery contains the object to be compared with what the user selects
// mystery is the variable that will keep the result or return from the function pickMystery
// pickMystery() --> will return the object: suspect, weapon, room
// mystery --> variable that store/contains the result of function pickMystery.
let mystery = pickMystery() //Who killed Mr. Boddy with what in which room... 
console.log(mystery)
//{suspect: {…}, weapon: {…}, room: {…}}
// room: {name: "Dining Room"}
// suspect: {name: "Victor Plum", occupation: "Designer", age: 22, description: "Billionaire video game designer", image: "https://vignette.wikia.nocookie.net/cluedo/images/a/a4/2016C6.jpg/revision/latest?cb=20200927103539", …}
// weapon: {name: "pistol", weight: 20}
// __proto__: Object

// console.log(
//     mystery.suspect.name,
//     mystery.weapon.name,
//     mystery.room.name
// ) //Victor Plum pistol Living Room
  
// ### 2 - Display the options for the user to choose
  showArrays(suspectsArray)
  showArrays(weaponsArray)
  showArrays(roomsArray)
  // Option 1 ----
  //Loops through all of our arrays and shows eachItem's name
  function showArrays(arr){
    arr.forEach(eachItem => { // use += to replace the first one, and add items
        document.body.innerHTML += `<li> ${eachItem.name} </li>`
    });
    // arr.forEach(function(eachItem){
    //   document.body.innerHTML += `<li> ${eachItem.name} </li>`
    // })
  }
    // Option 2 ---- with displayed options
  // To display the information
  function optionArrays(arr, eachId){
    arr.forEach(eachItem => {
        //console.log(eachId, eachItem.name);
        // eachItem.name.split(' ')[0] --> split by space between words, and take the first word.
        // populate inside the <selec> --> the options inside
        // we use += to add inside <select> the options <option> , not only equals to replace, but + to add it
        eachId.innerHTML += `<option value="${eachItem.name}">${eachItem.name}</option>`
        //console.log(content);
    });
  }
  optionArrays(suspectsArray, suspectOpt)
  optionArrays(weaponsArray, weaponOpt)
  optionArrays(roomsArray, roomOpt)
  
  
  
// OPTION 1 
//### 3 - Compare Mystery (random) with what the user chooses  
// Let the user guess by typing on the input  
function guess(){
    let guessedSuspect = document.querySelector('#suspect').value
    let guessedWeapon = document.querySelector('#weapon').value
    let guessedRoom = document.querySelector('#room').value
if(
    guessedSuspect === mystery.suspect.name 
    && guessedWeapon === mystery.weapon.name 
    && guessedRoom === mystery.room.name )
{
    alert("You guessed right! You win!!!")
} else {
    alert("You guessed wrong")

    alert( mystery.suspect.name + ' killed Mr. Boddy in the '+ mystery.room.name + ' with the ' + mystery.weapon.name)
} 
document.body.innerHTML = `<img src=${mystery.suspect.image} />`
}

// OPTION 2 
//### 3 - Compare Mystery (random) with what the user chooses 
// Let the user guess by typing on the input  
function guessTest(){
    // get the values from what the user has selected
    let guessedSuspect = document.querySelector('#suspectOpt').value
    let guessedWeapon = document.querySelector('#weaponOpt').value
    let guessedRoom = document.querySelector('#roomOpt').value
    console.log(mystery.suspect.name, mystery.weapon.name, mystery.room.name )
    console.log(guessedSuspect, guessedWeapon, guessedRoom )
    // compare with the Mystery object-- by random
    if(
        guessedSuspect === mystery.suspect.name 
        && guessedWeapon === mystery.weapon.name 
        && guessedRoom === mystery.room.name )
    {
        alert("You guessed right! You win!!!")
    } else {
        alert("You guessed wrong")
        alert( `${mystery.suspect.name} killed Mr. Boddy in the ${mystery.room.name} with the ${mystery.weapon.name}`)
        //alert( mystery.suspect.name + ' killed Mr. Boddy in the '+ mystery.room.name + ' with the ' + mystery.weapon.name)
    } 
    document.body.innerHTML = `<img src=${mystery.suspect.image} />`
}
  


//document.querySelector("button").onclick = guess;
document.querySelector("button").onclick = guessTest;
