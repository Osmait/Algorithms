import { isValidAnagram } from "./valid_anagram";

const groupAnagrams=(strs:string[])=>{
    const hash:{[key:string]:string[]}= {}
    strs.forEach((item)=>{
        let doesExist = false;
        Object.keys(hash).forEach((key)=>{
            if(isValidAnagram(item,key)){
                hash[key].push(item);
                doesExist = true;
            }
        });
        if(!doesExist){
            hash[item] = [item];
        }
    });
    console.log(hash)
    return [...Object.keys(hash).map((k)=>hash[k])]
}


console.log(groupAnagrams(['eat', 'ate', 'dog', 'pog']))
