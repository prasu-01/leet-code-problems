const rotate = (a, num) => {
    let len = a.length;
    let left = 0;
    let right = len-1;

    if(len === 1){
        return a[0] === num ? 0 : -1;
    }


    if(a[left] < a[right]){
        return binSearch(left, right, a, num);
    }
    let rotatedPoint =  findInflection(left, right, a);


    if(rotatedPoint === -1) return -1;

    let p = binSearch(left, rotatedPoint -1, a, num);
    let q = binSearch(rotatedPoint, right, a, num);


    return Math.max(p, q);
}

const findInflection = (left, right, a) => {

    while(left <= right){

        let mid = Math.floor((right + left)/2);

        if(a[mid] < a[mid-1]) return mid;
        else if(a[mid] > a[mid+1]) return mid+1;

        else if(a[left] < a[mid]) {
            left = mid+1;
        }
        else {
            right = mid-1;
        }
    }

   return -1;
}

const binSearch = (left, right, a, num) => {
    while(left <= right){

        let mid = Math.floor((right + left)/2);

        if(a[mid] === num) return mid;

        else if(a[mid] < num) {
            left = mid+1;
        }
        else if(a[mid] > num){
            right = mid-1;
        }
    }

    return -1;
}

console.log(rotate([4,5,6,7,0,1,2], 1));
console.log(rotate([4,5,6,7,0,1,2], 0));
console.log(rotate([4,5,6,7,0,1,2], 3));
console.log(rotate([5,1,3], 1));