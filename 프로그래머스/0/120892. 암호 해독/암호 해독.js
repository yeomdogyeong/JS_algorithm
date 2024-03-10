function solution(cipher, code) {
    let answer = ''
    answer += cipher[code-1]
   for(let i = code;i < cipher.length; i++){
       if(i % code === code-1){
           answer += cipher[i]
       }
   }
    return answer;
}
//3 7 11