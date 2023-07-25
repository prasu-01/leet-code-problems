function countOperations(binaryNumber) {
    let count = 0;
  
    while (binaryNumber !== '0') {
      // Check if the number is odd
      if (binaryNumber.charAt(binaryNumber.length - 1) === '0') {
        binaryNumber = divideByTwo(binaryNumber);
      } 
      // The number is even
      else {
        binaryNumber = subtractOne(binaryNumber);
      }
      count++;
    }
  
    return count;
  }
  
  function divideByTwo(binaryNumber) {
    // Convert binary to decimal
    const decimalNumber = parseInt(binaryNumber, 2);
    // Divide by 2
    const divided = Math.floor(decimalNumber / 2);
    // Convert decimal back to binary
    return divided.toString(2);
  }
  
  function subtractOne(binaryNumber) {
    // Convert binary to decimal
    const decimalNumber = parseInt(binaryNumber, 2);
    // Subtract 1
    const subtracted = decimalNumber - 1;
    // Convert decimal back to binary
    return subtracted.toString(2);
  }


  console.log(countOperations('011100'))

  console.log(countOperations('1111010101111'))