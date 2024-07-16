// Normal Recursion

// function helper(nums:number[],i:number,buy:number):number{
//     if(i==nums.length) return 0
//     if(buy==1){
//         let left=-1*nums[i]+helper(nums,i+1,0)
//         let right=helper(nums,i+1,1)
//         return Math.max(left,right)
//     }else{
//         let left=nums[i]+helper(nums,i+1,1)
//         let right=helper(nums,i+1,0)
//         return Math.max(left,right)
//     }
// }

function maxProfit(nums: number[]): number {
    let dp:any=[]
    let n=nums.length
    //Initialization
    for(let i=0;i<=n;i++){
        dp.push(new Array<number>(2))
        if(i==n){
            dp[i][0]=0
            dp[i][1]=0
        }
    }
    //Tabulation
    
    for(let i=n-1;i>=0;i--){
        for(let j=1;j>=0;j--){
            if(j==0){
                let left=nums[i]+dp[i+1][1]
                let right=dp[i+1][0]
                dp[i][j]=Math.max(left,right)
            }else{
                let left=-1*nums[i]+dp[i+1][0]
                let right=dp[i+1][1]
                dp[i][j]= Math.max(left,right)
            }
        }
    }
    return dp[0][1]
};