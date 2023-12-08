function solution(s) {
   let answer = []
   let copy = []
   
   for(let i=0; i<s.length; i++){
       if(!copy.includes(s[i])){
           answer.push(-1)
           copy.push(s[i])
       }else if(copy.includes(s[i])){
           answer.push(i - copy.lastIndexOf((s[i])))
           copy.push(s[i])
       }
   }
    return answer;
}