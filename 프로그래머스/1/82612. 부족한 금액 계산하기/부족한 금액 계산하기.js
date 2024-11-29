function solution(price, money, count) {
  let sum = 0
  for(let i = 0; i<count; i++){
      sum += price * (i+1)
  }
  let answer = sum - money 
  return answer > 0 ? answer : 0
}