// even or odd 


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please enter the number: ', (userInput) => {
    // Convert the user input to a number
    let num = parseInt(userInput);

    // Check if the conversion to number was successful
    if (isNaN(num)) {
        console.log("Please enter a valid number");
    } else {
        // Loop from 0 to the userInput number
        for (let x = 0; x <= num; x++) {
            if (x == 0) {
                console.log(x + " is even");
            } else if (x % 2 == 0) {
                console.log(x + " is even");
            } else {
                console.log(x + " is odd");
            }
        }
    }

    rl.close();
});
