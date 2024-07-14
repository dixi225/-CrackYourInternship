function maxProfit(prices: number[]): number {
    let profit =0
    let min=prices[0]
    let n=prices.length
    for(let i=1;i<n;i++){
        if(min>prices[i]) min=prices[i]
        else profit=Math.max(profit,prices[i]-min)
    }
    return profit
};