function productExceptSelf(nums:number[]):number[]{
    const res: Array<number> = [];
    let preFix:number = 1
    
    for(let i = 0; i < nums.length; i++){
        res[i] = preFix
        preFix *= nums[i];
    }
    let postFix = 1;
    for (let i = nums.length -1 ; i >= 0; i--) {
        res[i] *=  postFix
        postFix *= nums[i];
        
    }
    return res
}


console.log(productExceptSelf([1,2,3,4]))