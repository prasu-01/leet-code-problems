function isEveryLetterBalanced(str) {

    for(let i=0;i<str.length;i++){
        let char = str[i];
        if(char == char.toLowerCase()){
            if (!str.includes(char.toUpperCase())) {
                return false;
            }
        } else {
            if (!str.includes(char.toLowerCase())) {
             return false;
            }
        }
    }

    return true;
  }
  

function longestSub(s)
{
    var max_len = 0;
    var n = s.length;
     
    for(var i = 0; i < n; i++)
    {
        for(var j = i; j < n; j++)
        {
            if(isEveryLetterBalanced(s.substr(i, j - i + 1)) && max_len < j - i + 1){
                max_len = j - i + 1;
            }
        }
         
    }
    return max_len == 0 ? -1 : max_len;
     
}
 
  
//   console.log(longestSub("Madam"))

//   console.log(longestSub("CATattac"))


  console.log(longestSub("ABCcD"))


  
  console.log(longestSub("azABaabZax"))


  console.log(longestSub("TacoCat"))

  console.log(longestSub("AcZCbaBz"))

  

  console.log(longestSub("abcdefghijklmnopqr"))

  
  
  
  