/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
    let n=nums.length
    let i=0
    let j=n-1
    while(i<j){
        while(i<j&&nums[i]==0) i++
        while(i<j&&nums[j]!=0) j--
        if(i<j){
            let temp=nums[j]
            nums[j]=nums[i]
            nums[i]=temp
        }
        i++
        j--
    }
    i=0
    j=n-1
    while(i<j){
        while(i<j&&nums[i]!=2) i++
        while(i<j&&nums[j]==2) j--
        if(i<j){
            let temp=nums[j]
            nums[j]=nums[i]
            nums[i]=temp
        }
        i++
        j--
    }
};