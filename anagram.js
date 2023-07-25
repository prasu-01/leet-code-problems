// dont have to sort both the strings and equate to check the anagram

const ana = (s,t) =>{
    if(s.length !== t.length) return false;

    const sChars = {};

    for(let i=0;i<s.length;i++){
        sChars[s[i]] = sChars[s[i]] + 1 || 1;
    }


    for(let k=0;k<t.length;k++){
        if(!sChars[t[k]]) return false;
        sChars[t[k]]--;
    }

    return true;
}

console.log(ana('abcccc', 'cacbcc'))