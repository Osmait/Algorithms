function isvalid( s:string):boolean{
    const closingtoOpening = {
        '}': '{',
        ']': '[',
        ')': '(',
    }

    const stack: string[] = [];
    const chars = s.split('');
    for (let i = 0; i < chars.length; i++) {
        
        const element = chars[i];

        if (element in closingtoOpening) {
            const pop = stack.pop();

            if(closingtoOpening[element] === pop){
                continue   

            }else{
                return false
            }

        }else{

            stack.push(element)
        }
    }
    if(stack.length > 0) return false;
    return true

}