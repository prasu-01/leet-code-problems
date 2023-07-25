const substr = (s) => {
    let i=0; j=0;max=0;
    let set =  new Set();

    while(j<s.length){
        if(!set.has(s.charAt(j))){
            set.add(s.charAt(j));
            j++;
            max = Math.max(max, set.size);
        }
        else{
            set.delete(s.charAt(i));
            i++;
        }
    }

    return max;
}

console.log(substr("pwwkew"))