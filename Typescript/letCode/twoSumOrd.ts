function twoSumOrd(numbers:number[],target:number):number[]{
    let L = 0;
    let R = numbers.length-1;

    while(numbers[L]+ numbers[R]!== target){
        if(numbers[L] + numbers[R] > target)R -=1
        else if(numbers[L] + numbers[R] < target) L +=1
    }
    return  [L +1,R+1]

}



console.log(twoSumOrd([2,7,11,15],9))