function solution(s) {
   
   //문자열이 짝수일 때 : 문자열 길이 / 2 , /2-1 문자열인덱스 반환
    //홀수일 때 : 문자열 길이 / 2 에서 반내림한 위치 문자열 반환
     let answer = ''
    if(s.length % 2 === 0){
        let length = s.length / 2
        answer += s[length-1]
        answer += s[length]
        return answer
    }
    
    if(s.length % 2 === 1){
        let length = s.length / 2
        let length2 = Math.floor(length)
        answer += s[length2]
        return answer
    }
}