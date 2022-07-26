
const pal = (n) =>{
    if( n < 0 || (n!=0 && n%10 === 0)) return false;

    let rev = 0;
    while(n > rev) {
        rev = (rev * 10) + (n % 10);
        n = parseInt(n/10);
        console.log(n, rev)
    }

    return (rev == n || n == parseInt(rev/10))
}

console.log(pal(3457543))