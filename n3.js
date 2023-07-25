function n3(A){
  const total = A.reduce((sum, t) => sum + t, 0);
  let avg = Math.floor(total / A.length);
  if(total % A.length != 0 ) {
    avg += 1;
  }
  let actions = 0;
  let reserve = 0;

  A.sort((a,b) => b-a);

  for (let i = 0; i < A.length ; i++) {
    if(A[i] > avg){
        let d1 = A[i] - avg;
        A[i] -= d1;
        reserve += d1;
        actions += Math.abs(d1);
    }
	else if(A[i] < avg) {
        let d2 = avg - A[i];
        if(reserve >= d2){
           A[i] += d2;
           reserve -= d2;
        }
        else {
           actions += d2 - reserve;
           reserve = 0;
           A[i] += d2;
        }
    }
  }
  return actions;
}


console.log(n3([1,2,2,4]))

console.log(n3([4,2,4,6]))

console.log(n3([1,1,2,1]))

console.log(n3([2,1,2,3]))