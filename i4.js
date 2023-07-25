// function binaryToDecimal(binaryNumber) {
//     const reversedBinary = binaryNumber.split('').reverse();
//     let decimal = 0;
  
//     for (let i = 0; i < reversedBinary.length; i++) {
//       const digit = parseInt(reversedBinary[i], 10); 
   
//       decimal += digit * Math.pow(2, i); 
//     }
  
//     return decimal;
// }

function sol(b){
    // let d = binaryToDecimal(b);

    let d = parseInt(b,2)
    // console.log(d);
    let cnt = 0;

    while(d != 0){
        if(d%2 == 0){
            d = d/2;
        } else {
            d = d-1;
        }
        cnt ++;
        // console.log(d)
    }

  return cnt;
}

console.log(sol("1111010101111"))
console.log(sol("111"))
console.log(sol("011100"))
