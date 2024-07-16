function twoSum(nums: number[], target: number): number[] {
    let map=new Map<number,number>()
    let ans:number[]=[]
    let n=nums.length
    for(let i=0;i<n;i++){
        if(map.has(target-nums[i])){
            ans[0]=map.get(target-nums[i])
            ans[1]=i
            return ans
        }
        else map.set(nums[i],i)
    }
    return ans
};