/**
 Do not return anything, modify nums in-place instead.
 */

function moveZeroes(nums: number[]): void {
    let i=0
    let sizeOfCluster=0
    let n=nums.length
    while(i<n){
        if(nums[i]==0) sizeOfCluster++
        else{
            let temp=nums[i]
            nums[i]=nums[Math.abs(i-sizeOfCluster)]
            nums[Math.abs(i-sizeOfCluster)]=temp
        }
        i++
    }
};