
//take either one or two steps 

// possibilities follow fibonacci series 

// takes o(n)  space 


// const climb = (n) => {

//     if(n<=3)  return n;

//     let ways = [0,1,2,3];     // store ways for steps less than 4

//     for(let i=4;i<=n;i++){
//         ways.push(ways[i-1] + ways[i-2]);
//     }

//     return ways.pop();
// }


// for o(1) space complexity - use pointer variables


const climb = (n) => {

    if(n===1) return n;

    let first = 1;
    let second = 2;

    for(let i=3;i<=n;i++){
        let third = first + second;
        first = second;
        second = third;
    }


    return second;
}


console.log(climb(5));