console.log("test");

const favoriteSongs = [
  "Tiny Dancer",
  "Running Up That Hill",
  "Don't Stop Moning",
  "Tragedy",
  "Crazy Horses",
];

const profitFromFirstSevenDaysOfTaosPennyDoublingPyramidScheme = [
  1, 2, 4, 8, 16, 32, 64,
];

const team = [
  { name: "Ben", specialSkill: "Coding Rapping" },
  { name: "Tao", specialSkill: "Hand Raising" },
  { name: "Lizzie", specialSkill: "Being Friendly" },
  { name: "Liz", specialSkill: "Crochet" },
  { name: "Patrick", specialSkill: "Call of Duty" },
  { name: "Chris", specialSkill: "Changing Lives" },
  { name: "Tim", specialSkill: "Analogies" },
  { name: "James", specialSkill: "Friendship" },
  { name: "Joshep", specialSkill: "Being Positive" },
  { name: "Max", specialSkill: "Papier-mache" },
];

// task 2
let options = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

console.log(`The month I was born is ${options[6]}.`);
console.log(`The month my mother was born is ${options[2]}.`);
console.log(`My favorite month is ${options[4]}.`);

// Task3
/*
```js
let englishNumbers = ["one", "two", "three", "four", "five"];
```

👉 Declare an index variable and assign it the value of 0.

👉 In a while loop, console.log the array item at the current index and add 1 to the index variable.

👉 Have the while loop run until the index is equal to or greater than the array's length property.

## Task 4 - Looping and Accessing

👉 Refactor task three to use a for loop instead of a while loop.

## Task 5 - Looping and Reassigning

```js
let words = ["ben", "ha", "spla", "fa", "ca", "dra"];
// for loop goes here

console.log(words);
```

👉 Use a for loop to iterate over the words array and add the letter t to the end of each word.
*/

let englishNumbers = ["one", "two", "three", "four", "five"];
let index = 0;

while (englishNumbers.length > index) {
  console.log(englishNumbers[index]);
  index++;
}
