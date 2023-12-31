function solution(s) {
    let splitS = s.split(' ')
    let answer = [Math.min(...splitS),Math.max(...splitS)]
   return answer.join(' ')
}