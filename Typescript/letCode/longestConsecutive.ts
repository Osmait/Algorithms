function longestConsecutive(nums:number[]):number{
    const numbers = new Set(nums)
    let longest = 0

    for(const n of nums){
        if(!numbers.has(n -1)){
            let length = 0
            while(numbers.has(n+length)){
                length +=1;
            }
            longest = Math.max(length,longest);

        }
    }
    return longest
}