
// Add a conditional inside the while loop which will only allow even numbers to be printed.

let num = 10;

while (num > 0) {
  if(num % 2 === 0){
    console.log(num);
  }
  num--;
}

// Use an if statement to check if the parkIsOpen variable is true. If so, use console.log() to print the following message:
// Welcome to the Badlands National Park! Try to enjoy your stay.
// Next, add an else statement that prints:

// Sorry, the Badlands are particularly bad today. We're closed!

let parkIsOpen = true; 

if (parkIsOpen == true){
  console.log(`Welcome to the Badlands National Park! Try to enjoy your stay.`)
} else {
  console.log(`Sorry, the Badlands are particularly bad today. We're closed!`)
}

// Add an if statement inside the loop that is true when numSheep is greater than 10000. Let's be sure to insert this line of code before multiplying our numSheep varaible by 4.


// Now, inside the if statement, set numSheep equal to half of the total number of sheep.


// Finally, still inside the if statement (after the line reassigning numSheep), print a message to the console with the following format:

//  Removing number sheep from the population. 
// Replace number with the actual number of sheep being incremented.

let numSheep = 4;
let monthsToPrint = 12;

for (let monthNumber = 1; monthNumber <= monthsToPrint; monthNumber++) {

  if (numSheep > 10000) {
    numSheep = numSheep / 2;
    console.log("Removing " + numSheep + " sheep from the population.");
  }

  numSheep *= 4;
  console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!");
}



// Create an if block that checks when monthNumber is a multiple of 4. Inside this block, calculate 75% of the sheep population and store the result in the reduction variable.


// Still inside the if block (after the line reassigning reduction), console.log a message with the format below:

// Removing number sheep from the population.
// Replace number with the actual number of sheep being reduced.


// Lastly inside the if block, subtract the value of reduction from the total number of sheep and store the result back on the numSheep variable.


// Create an else if block that checks when numSheep is greater than 10000. Inside this block, calculate 50% of the sheep population and store the result in the reduction variable.


// Still inside the else if block (after the line reassigning reduction), console.log a message with the format below:

// Removing number sheep from the population.
// Replace number with the actual number of sheep being reduced.


// Lastly inside the else if block, subtract the value of reduction from the total number of sheep and store the result back on the numSheep variable.

let numSheep = 4;
let monthsToPrint = 12;
let reduction;

for (let monthNumber = 1; monthNumber <= monthsToPrint; monthNumber++) {

  if (monthNumber % 4 == 0) {
    reduction = numSheep * .75;
    console.log("Removing " + reduction + " sheep from the population.");
    numSheep -= reduction;
  }

  else if (numSheep > 10000) {
    reduction = numSheep * .5;
    console.log("Removing " + reduction + " sheep from the population.");
    numSheep -= reduction;
  }

  numSheep *= 4;
  console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!");
}

// Let's start by adding an if statement that runs when currentGen is an even number and is less than or equal to 4.


// Inside our if statement, let's increment our totalMW by 62. Then, use the variables currentGen and totalMW to console.log some output. Here are two sample lines from the output. Ensure the format matches:

//   Generator #2 is on, adding 62 MW, for a total of 62 MW!

//   Generator #4 is on, adding 62 MW, for a total of 124 MW!

// Next, let's add an else if statement that runs when currentGen is an even number and is greater than or equal to 5.


// Inside the else if statement, increment totalMW by 124. Then, use the variables currentGen and totalMW to console.log some output. Here are two sample lines from the output. Ensure the format matches:

//   Generator #6 is on, adding 124 MW, for a total of 248 MW!

//   Generator #8 is on, adding 124 MW, for a total of 372 MW!

// Finally, add an else statement to account for any odd number generators and console.log some output. Here are two smaple lines from the output. Ensure the format matches:

//   Generator #1 is off.

//   Generator #3 is off.

let totalGen = 19;
let totalMW = 0;

for (let currentGen = 1; currentGen <= totalGen; currentGen++) {
  if (currentGen % 2 == 0 && currentGen <= 4) {
    totalMW += 62;
    console.log("Generator #" + currentGen + " is on, adding 62 MW, for a total of " + totalMW + " MW!");
  } else if (currentGen % 2 == 0 && currentGen >= 5) {
    totalMW += 124;
    console.log("Generator #" + currentGen + " is on, adding 124 MW, for a total of " + totalMW + " MW!");
  } else {
    console.log("Generator #" + currentGen + " is off.");
  }
}