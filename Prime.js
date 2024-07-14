const readline = require('readline');

// Function to check if a number is prime
function isPrime(num) { 
    if (num <= 1) { 
        return false;
    } 
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        } 
    }
    return true; 
}

// Function to check the prime status of an array of numbers
function checkPrimes(arr) {
    let primeStatus = [];
    for (let i = 0; i < arr.length; i++) { 
        primeStatus.push(isPrime(arr[i])); 
    }
    return primeStatus;
}

// Function to get an array of numbers from the user
function getUserArray(input) {
    var array = input.split(',').map(Number);
    if (array.some(isNaN)) {
        console.error("Invalid input. Please enter valid numbers separated by commas.");
        return [];
    }
    return array;
}

// Set up readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Get user input and check prime status
rl.question("Enter numbers separated by commas: ", (input) => {
    var userArray = getUserArray(input);
    if (userArray.length > 0) {
        console.log(`Input array: [${userArray}]`);
        var primeStatus = checkPrimes(userArray);
        console.log(`Prime status of each element: ${primeStatus}`);
    } else {
        console.log("No valid input to process.");
    }
    rl.close();
});
