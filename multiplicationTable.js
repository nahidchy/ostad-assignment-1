function generateMultiplicationTable(number) {
    console.log(`Generate Multiplication Table for: ${number}`);
  
    for (let i = 1; i <= 10; i++) {
      const result = number * i;
      console.log(`${i} x ${number} = ${result}`);
    }
  }
  
  // Taking input from the user
  const userInput = prompt("Enter a number to generate its multiplication table:");
  const number = parseInt(userInput);
  
  if (isNaN(number)) {
    console.log("Invalid input. Please enter a valid number.");
  } else {
    generateMultiplicationTable(number);
  }
  
  
  