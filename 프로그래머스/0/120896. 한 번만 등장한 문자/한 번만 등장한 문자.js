function solution(s) {
   let arr = s.split('')
   let neww = new Set(arr)
   let some = [...neww]
   let result = {}
   console.log(some)
    for(let i = 0; i<s.length; i++){
       if (result[s[i]] === undefined) {
           result[s[i]] = 0;
       }
       result[s[i]]++;
        console.log(result)
    }
    
    //result의 키값이 1인 친구들만 모으기
let keysWithOneOccurrence = [];
    for (let key in result) {
        if (result[key] === 1) {
            keysWithOneOccurrence.push(key);
        }
    }
    
   
    return keysWithOneOccurrence.sort().join('')
}