
const sub = (s) => {
    let i = 0;
    let j = 0;
    let max = 0;
    let set = new Set();
    while(j<s.length){
        if(!set.has(s.charAt(j))){
            set.add(s.charAt(j));
            j++;
            max = Math.max(max, set.size);
        }
        else {
            set.delete(s.charAt(j));
            i++;
        }
    }
    return max;
}

console.log(sub('abcabc'));