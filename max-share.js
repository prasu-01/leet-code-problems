const share = (a) => {
    let maxProfit = 0;
    let minPrice = a[0];

    for(let i=0;i<a.length;i++){
        // put the minimum price till the pointer in min Price and check if the profit is higher than 
        //max profit till then

        if(a[i] < minPrice) {
            minPrice = a[i]
        }

        let curProfit = a[i] - minPrice;
        maxProfit = Math.max(curProfit, maxProfit);
    }

    return maxProfit;
}

console.log(share([7,6,4,3,1]));