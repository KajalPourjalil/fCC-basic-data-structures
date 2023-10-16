let yourArray = ["Kajal", "Alexandra", 5311, true, "forever"];

console.log(yourArray);

let myArray = ["a", "b", "c", "d"];
// Only change code below this line
myArray[1] = "k";
// Only change code above this line
console.log(myArray);

function mixedNumbers(arr) {
  // Only change code below this line
  arr.unshift("I", 2, "three");
  arr.push(7, "VIII", 9);
  // Only change code above this line
  return arr;
}

console.log(mixedNumbers(["IV", 5, "six"]));

function popShift(arr1) {
  let popped = arr1.pop(); // Change this line
  let shifted = arr1.shift(); // Change this line
  return [shifted, popped];
}

console.log(popShift(["challenge", "is", "not", "complete"]));

console.log("hi");

const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line
arr.splice(0, 2);
arr.splice(1, 2);
arr.splice(2, 2);
// Only change code above this line
console.log(arr);

function htmlColorNames(arr) {
  // Only change code below this line
  arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond");
  // Only change code above this line
  return arr;
}

console.log(
  htmlColorNames([
    "DarkGoldenRod",
    "WhiteSmoke",
    "LavenderBlush",
    "PaleTurquoise",
    "FireBrick",
  ])
);

function forecast(arr) {
  // Only change code below this line
  return arr.slice(2, 4);
}

// Only change code above this line
console.log(
  forecast(["cold", "rainy", "warm", "sunny", "cool", "thunderstorms"])
);

function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // Only change code below this line
    newArr.push([...arr]);
    // Only change code above this line
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));

function spreadOut() {
  let fragment = ["to", "code"];
  let sentence = ["learning", ...fragment, "is", "fun"]; // Change this line
  return sentence;
}

console.log(spreadOut());

function quickCheck(arr, elem) {
  // Only change code below this line
  return arr.indexOf(elem) >= 0 ? true : false;
  // Only change code above this line
}

console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms"));

function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(elem) == -1) {
      newArr.push(arr[i]);
    }
    // Only change code above this line
    return newArr;
  }
}

console.log(
  filteredArray(
    [
      [3, 2, 3],
      [1, 6, 3],
      [3, 13, 26],
      [19, 3, 9],
    ],
    3
  )
);

let myNestedArray = [
  // change code below this line
  ["unshift", false, 1, 2, 3, "complex", "nested"],
  ["loop", "shift", 6, 7, 1000, "method"],
  ["concat", false, true, "spread", "array", ["deep"]],
  ["mutate", 1327.98, "splice", "slice", "push", [["deeper"]]],
  ["iterate", 1.3849, 7, "8.4876", "arbitrary", "depth", [[["deepest"]]]]
  // change code above this line
];

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

// Only change code below this line
foods['bananas'] = 13;
foods['grapes'] = 35;
foods['strawberries'] = 27;
// Only change code above this line

console.log(foods);

let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};

// Only change code below this line
userActivity.data.online = 45;
// Only change code above this line

console.log(userActivity);

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

function checkInventory(scannedItem) {
  // Only change code below this line
  return foods[scannedItem];
  // Only change code above this line
}

console.log(checkInventory("apples"));

delete foods.oranges;
delete foods.plums;
delete foods.strawberries;

console.log(foods);

let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(userObj) {
  // Only change code below this line
  return ["Alan", "Jeff", "Sarah", "Ryan"].every(name =>
    userObj.hasOwnProperty(name)
  );
  // Only change code above this line
}

console.log(isEveryoneHere(users));

function countOnline(allUsers) {
  // Only change code below this line
  let result = 0;
  for (let user in allUsers) {
    if (allUsers[user].online === true) {
      result++;
    }
  }
  return result;
  // Only change code above this line
}

console.log(countOnline(users));