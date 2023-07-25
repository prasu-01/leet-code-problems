function nab4(n){
   
    let num = [];

    while(n>0){
        num.push(n%2);
        n = parseInt(n/2);
    }

    let res = 0;
    let cnt = undefined;

    for(let i=0;i<num.length;i++){

        if(num[i] === 1){
            if(cnt > res) res = cnt;
             cnt = 0;
        }
        else {
            cnt++;
        }
    }


    return res;

}

console.log(nab4(9));
console.log(nab4(32));
console.log(nab4(15));
console.log(nab4(529));
console.log(nab4(20));
console.log(nab4(1));
console.log(nab4(0));