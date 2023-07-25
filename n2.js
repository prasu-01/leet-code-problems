function n2(str){

    const charA = 'A';
    let numB = 0;
    let min = 0;


    for (let i = 0; i < str.length; i++) {
        if (charA === str[i]) {
            min = Math.min(numB, min + 1);
        } else {
            numB++;
        }
    }
    return min;
  
}


console.log(n2("BAAABAB"))

console.log(n2("BBABAAAA"))

console.log(n2("AABBAABB"))