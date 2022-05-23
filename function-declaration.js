// Start by declaring a function called multiplyTrio that takes in three parameters. You can use whatever name you like for the parameters
// Now, inside the function, multiply the numbers together and return the result.

const multiplyTrio = (a,b,c) => {
    return a * b * c
}

// Declare a function called maxOfTwo that takes in two numbers and returns the greater value.

const maxOfTwo = (x,y) => {
    if(x > y){
      return x
    } else {
      return y
    }
}

// Rewrite the body of the mystery function so that there is a single return statement and no declared variables.

function mystery(x, y) {

    return (4*x*y) + (3*y+5)
}


// Let's start by building a function called feedPerRanger. This function should accept two parameters: one representing the current population of sheep, and one for the number of rangers available during the day.
// Inside the function, multiply the sheep population by 2 and divide it by the number of rangers. Assign the result to a new variable called feedPerRanger.
// Finish coding the function by displaying an alert with the following format:
// Each ranger should load *number* lbs of feed today.
// Replace *number* with the value for the variable feedPerRanger.

const feedPerRanger = (sheep, rangers) => {
    let feedPerRanger = (sheep * 2) / rangers;
    alert(`Each ranger should load ${feedPerRanger} lbs of feed today.`)
}


// Define a new function named changePowerTotal that takes the following four parameters:
// The total power generated.
// The generator ID for the current generator.
// The generator status.
// // The amount of power produced by the current generator.

// Inside the function, add an if statement checking if the status is equal to the string "on".


// If the status is "on", add the amount of power for that generator to the total power generated and display an alert in the following format:

// // Generator #2 is now on, adding 62 MW, for a total of 62 MW!
// Now let's add an else if statement that will run if the current generator status is "off".


// If the current generator's status is "off", subtract the amount of power for that generator from the total power generated and display an alert in the following format:

// Generator #2 is now off, removing 62 MW, for a total of 0 MW!


// Finally, return the total power generated.

function changePowerTotal(total, ID, status, power) {
    if (status == "on") {
      total += power;
      alert("Generator #" + ID + " is now " + status + ", adding " + power + " MW, for a total of " + total + " MW!");
    } else if (status == "off") {
      total -= power;
      alert("Generator #" + ID + " is now " + status + ", removing " + power + " MW, for a total of " + total + " MW!");
    }
    return total;
  }