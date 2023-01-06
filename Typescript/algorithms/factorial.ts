export const iterativeFactorial = (n:number):number=>{
    let fact = 1

    for (let i = 2; i <= n ; i++) {
        fact *= i

    }
    return fact
}


const recurFactorial = (n:number):number=>{
    if (n === 1){
        return n
    }
    
    return recurFactorial(n-1)* n
     
    
    
    
}

console.log(iterativeFactorial(5))
console.log(recurFactorial(5))
