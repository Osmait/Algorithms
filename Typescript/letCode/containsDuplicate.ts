

export const containsDuplicate = (nums:number[]):boolean=> {
    let data = new Set()

    for (let n = 0; n < nums.length; n++) {
        if(data.has(nums[n]))return true
        else data.add(nums[n])
    }

    return false
}