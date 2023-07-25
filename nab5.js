function nab5(x,y,d){
  

     let n = parseInt((y-x)/d);


     return (y-x)%d === 0 ? n : n+1;

    //  while(sum < y){
    //     sum += d;
    //     n++;
    //  }

    //  return n;
}

console.log(nab5(10, 85, 30));
console.log(nab5(10, 40, 30));
console.log(nab5(10, 10, 99));