function n1(S){
    const lowercase = new Set();
    const uppercase = new Set();
  
    for (let i = 0; i < S.length; i++) {
      const char = S.charAt(i);
      if (char >= 'a' && char <= 'z') {
        lowercase.add(char);
      } else if (char >= 'A' && char <= 'Z') {
        uppercase.add(char);
      }
    }
  
    let flag = 0;
    let max = 'A';

    uppercase.forEach((char) => {
      const lowercaseChar = char.toLowerCase();
      if (lowercase.has(lowercaseChar) && char >= max) {
        flag = 1;
        max = char;
      }
    });
  
    return flag === 1 ? max : 'NO';
}

console.log(n1("abcde"))
console.log(n1("aAbBcC"))
console.log(n1("AbCde"))
console.log(n1("AbCcde"))