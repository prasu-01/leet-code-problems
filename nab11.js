function nab11(a,b,k) {


    let n1 = parseInt(a/k);
    let n2 = parseInt(b/k);


    return (a%k === 0) ? (n2-n1)+1 : (n2-n1);
}

console.log(nab11(6,12,2));
console.log(nab11(11,345,17));
console.log(nab11(6,11,2));