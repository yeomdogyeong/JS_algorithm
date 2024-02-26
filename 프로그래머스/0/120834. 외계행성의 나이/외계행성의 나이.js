function solution(age) {
    let alphabetMap = new Map();
    let alphabet = 'abcdefghij'
    
    for(let i = 0 ; i<alphabet.length; i++){
        let alpha = alphabet[i]
        alphabetMap.set(i,alpha)
    }
console.log(alphabetMap)
    let result = '' ;
    let stringAge = String(age)
   for(let i = 0; i < stringAge.length; i++){
       result += alphabetMap.get(parseInt(stringAge[i]))
       
   }
    return result;
}