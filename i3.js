function findLargestWindow(str) {
    let maxLength = 0;
    let startIndex = 0;
    let windowStart = 0;
    let lowercaseSet = new Set();
  
    for (let i = 0; i < str.length; i++) {
      const char = str[i].toLowerCase();
  
      if (/[a-z]/i.test(char)) {
        lowercaseSet.add(char);
  
        while (lowercaseSet.size !== i - windowStart + 1) {
          const startChar = str[windowStart].toLowerCase();
          lowercaseSet.delete(startChar);
          windowStart++;
        }
  
        if (lowercaseSet.size === i - windowStart + 1 && i - windowStart + 1 > maxLength) {
          maxLength = i - windowStart + 1;
          startIndex = windowStart;
        }
      }
    }
  
    const largestWindow = str.slice(startIndex, startIndex + maxLength);
    return largestWindow;
  }

  console.log(findLargestWindow("aAbBZCz"))