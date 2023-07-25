function nab1(array) {
    const numbersSet = new Set(array);
    let leastPositiveNumber = 1;
  
    while(numbersSet.has(leastPositiveNumber)) {
      leastPositiveNumber++;
    }
  
    return leastPositiveNumber;
  
  }

console.log(nab1([1, 3, 6, 4, 1, 2]));
console.log(nab1([1,2,3]));
console.log(nab1([-1,-3]));