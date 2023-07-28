function calculateGrade(score) {
    let grade;
  
    switch (true) {
      case score >= 90:
        grade = 'A';
        break;
      case score >= 80:
        grade = 'B';
        break;
      case score >= 70:
        grade = 'C';
        break;
      case score >= 60:
        grade = 'D';
        break;
      default:
        grade = 'F';
        break;
    }
  
    return grade;
  }
  
  // Test the function with different scores:
  console.log("Score: 95, Grade: " + calculateGrade(95)); // Output: 'A'
  console.log("Score: 85, Grade: " + calculateGrade(85)); // Output: 'B'
  console.log("Score: 75, Grade: " + calculateGrade(75)); // Output: 'C'
  console.log("Score: 65, Grade: " + calculateGrade(65)); // Output: 'D'
  console.log("Score: 55, Grade: " + calculateGrade(55)); // Output: 'F'