//Creating arrays
//we can store various data types — strings, numbers, objects, and even other arrays.
//we do not have to limit ourselves to storing only numbers in one array, and in another only strings.
const myArr = [0, 1, 2, 5, 4, 5, "bread", "milk","tree", 795, [0, 1, 2]]
const myHeors = ["shaktiman", "naagraj"]
const myArr2 = new Array(1, 2, 3, 4)
 
//console.log(myArr[10]);

//console.log(myArr.length);     //you find out the length (in characters) of a string — by using the length

// Array methods

                          // Adding items
//myHeors.push("niraj")
//myHeors.push(6)
//myHeors.push(9)
//myHeors.push(6)
// myHeors.push(7)
//myHeors.unshift(6)

// console.log(myHeors)

                 //Removing items

//myHeors.shift(6)
// myHeors.pop()
myHeors.splice( 1);
console.log(myHeors)



                  // Finding the index of items in an array
                  

 //console.log(myHeors.includes(9));
 //console.log(myArr2.indexOf(3));

 //const newArr = myArr.join()

 //console.log(myArr);
 //console.log( newArr);


// slice, splice
 //console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

//console.log(myn1);
//console.log("B ", myArr);


//const myn2 = myArr.splice(1, 3)
//console.log("C ", myArr);
//console.log(myn2);





              //Converting between strings and arrays
//const cities = data.split(",");
//cities;



//console.log(gameName.split('-'));

//const dogNames = ["Rocket", "Flash", "Bella", "Slugger"];
//dogNames.toString(); // Rocket,Flash,Bella,Slugger


//const commaSeparated = cities.join(",");
//commaSeparated;
