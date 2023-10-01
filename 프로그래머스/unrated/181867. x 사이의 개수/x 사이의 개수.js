function solution(myString) {
  const answer = myString.split('x')
   return answer.map(x => x.length)
}