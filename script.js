// let yourArray = ['Kajal', 'Alexandra', 5311, true, 'forever'];

// // console.log(yourArray);

// let myArray = ["a", "b", "c", "d"];
// // Only change code below this line
// myArray[1] = 'k';
// // Only change code above this line
// // console.log(myArray);

// function mixedNumbers(arr) {
//     // Only change code below this line
//   arr.unshift('I', 2, 'three');
//   arr.push(7, 'VIII', 9);
    // Only change code above this line
    // return arr;
//   }
  
//   console.log(mixedNumbers(['IV', 5, 'six']));

function popShift(arr1) {
    let popped = arr1.pop(); // Change this line
    let shifted = arr1.shift(); // Change this line
    return [shifted, popped];
}
  
  console.log(popShift(['challenge', 'is', 'not', 'complete']));

console.log('hi')