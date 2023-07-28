function filterEvenNumbers(arr) {
    const filteredArray = arr.filter((num) => num % 2 === 0);
    return filteredArray;
  }
  
  const originalArray = [12, 34, 45, 23, 6, 78, 54, 90];
  const filteredEvenNumbers = filterEvenNumbers(originalArray);
  
  console.log("Original Array: " + JSON.stringify(originalArray));
  console.log("Filtered Even Numbers: " + JSON.stringify(filteredEvenNumbers));