// Some & Every Exercises

// Some
// Example 1

// hasOddNumber
// Write a function called hasOddNumber which accepts an array and returns true if the array contains at least one odd number, otherwise it returns false.

// hasOddNumber([1,2,2,2,2,2,4]) // true
// hasOddNumber([2,2,2,2,2,4]) // false

// Solution 1

// OPTION 1
function hasOddNumber(array) {
  return array.some((value) => {
    if( value % 2 !== 0) {
      return array
    }
  })
}

console.log(hasOddNumber([1,2,2,2,2,2,4])) // true
console.log(hasOddNumber([2,2,2,2,2,4]))  // false


// OPTION 2
// function hasOddNumber(array){
//   return array.some((value) => {
//     return value % 2 !== 0;
//   })
// }

// console.log(hasOddNumber([1,2,2,2,2,2,4])) // true
// console.log(hasOddNumber([2,2,2,2,2,4]))  // false

// ******************************************************

// Example 2

// hasAZero
// Write a function called hasAZero which accepts a number and returns true if that number contains at least one zero. Otherwise, the function should return false

// hasAZero(33321232131012) // true
// hasAZero(1212121) // false

// Solution 2

function hasAZero(number) {
  const numberToString = number.toString().split("")
  return numberToString.some((num) => {
    return num === '0'
  })
}

console.log(hasAZero(33321232131012)) // true
console.log(hasAZero(1212121)) // false

// *****************************************

// Example 3

// hasNoDuplicates
// Write a function called hasNoDuplicates which accepts an array and returns true if there are no duplicate values (more than one element in the array that has the same value as another). If there are any duplicates, the function should return false.

// hasNoDuplicates([1,2,3,1]) // false
// hasNoDuplicates([1,2,3]) // true

// Solution 3
function hasNoDuplicates(array) {
  return array.every((value) => {
    return array.indexOf(value) === array.lastIndexOf(value)
  })
}

console.log(hasNoDuplicates([1,2,3,1])) // false
console.log(hasNoDuplicates([1,2,3])) // true


// *********************************************

// Example 4

// hasCertainKey
// Write a function called hasCertainKey which accepts an array of objects and a key, and returns true if every single object in the array contains that key. Otherwise it should return false.

// let arr = [
//     {title: "Instructor", first: 'Elie', last:"Schoppik"},
//     {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true},
//     {title: "Instructor", first: 'Matt', last:"Lane"},
//     {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
//   ]

//   hasCertainKey(arr,'first') // true
//   hasCertainKey(arr,'isCatOwner') // false

// Solution 4
function hasCertainKey(array, key){
  return array.every((element) => {
    // return key in element
    return element[key]
  })
}

let arr = [
    {title: "Instructor", first: 'Elie', last:"Schoppik"},
    {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true},
    {title: "Instructor", first: 'Matt', last:"Lane"},
    {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
  ]

console.log(hasCertainKey(arr,'first')) // true
console.log(hasCertainKey(arr,'isCatOwner') )// false

// *************************************************

// Example 5

// hasCertainValue
// Write a function called hasCertainValue which accepts an array of objects and a key, and a value, and returns true if every single object in the array contains that value for the specific key. Otherwise it should return false.

// let arr = [
//     {title: "Instructor", first: 'Elie', last:"Schoppik"},
//     {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true},
//     {title: "Instructor", first: 'Matt', last:"Lane"},
//     {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
//   ]

//   hasCertainValue(arr,'title','Instructor') // true
//   hasCertainValue(arr,'first','Elie') // false

// Solution 5
function hasCertainValue(array, key, searchValue) {
  return array.every((element) => {
    return element[key] === searchValue
  })
}

let array = [
    {title: "Instructor", first: 'Elie', last:"Schoppik"},
    {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true},
    {title: "Instructor", first: 'Matt', last:"Lane"},
    {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
  ]

console.log(hasCertainValue(array,'title','Instructor')) // true
console.log(hasCertainValue(array,'first','Elie') )// false
