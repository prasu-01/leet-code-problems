

const long = (s) => {
    
    let maxLen =  1;
    let start = 0;
    
const expandInMiddle = (left, right) =>{
    while(left>=0 && right<s.length && s[left] === s[right]){
        let curLen = right-left+1;
        if(curLen > maxLen){
            maxLen = curLen;
            start = left;   // store the start index to slice the string from that point to maxLen 
        }
        left--;
        right++;
    }
}

    for(let i=0;i<s.length;i++){
        expandInMiddle(i-1, i+1);
        expandInMiddle(i, i+1);
    }

    return s.slice(start, start+maxLen);
}



console.log(long("ABAAABCA"))
console.log(long("BACD"))