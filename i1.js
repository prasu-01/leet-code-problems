function solution(A) {
    // Implement your solution here
    let n = new Set(A);

    let i=1;

    console.log(n.has(i))
    while(n.has(i)){
         i++;
    }
   return i;
}


console.log(solution([1,2,3]));