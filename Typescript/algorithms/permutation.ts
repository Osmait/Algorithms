


const stringPermutations = (str:string):any => {
    if (str.length <= 2) return str.length === 2 ? [str, str[1] + str[0]] : [str];
    return str
      .split('')
      .reduce(
        (acc, letter, i) =>
          acc.concat(stringPermutations(str.slice(0, i) + str.slice(i + 1)).map((val:string) => letter + val)),
        []
      );
  };

console.log(stringPermutations('abc'));


const recur_permute =(string:string, pocket:string="")=>{
    if(string.length === 0){
        console.log(pocket)
    }else{
        for (let i = 0; i < string.length; i++) {
            let letter = string[i]
            let front = string.slice(0,i)
            let back = string.slice(i+1)
            let together = front + back 
            recur_permute(together,letter+pocket)
            
        }
    }

}
console.log(recur_permute('abc'));