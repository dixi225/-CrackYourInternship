function majorityElement(nums: number[]): number {
    //Moore's Voting Algotithm
    let count=1
    let majorityElemet=nums[0]
    let n=nums.length
    for(let i=0;i<n-1;i++){
        if(majorityElemet==nums[i+1]) count++
        else count--
        if(count==0){
            majorityElemet=nums[i+1]
            count=1
        }
    }   
    return majorityElemet
};