function solution(numbers, k) {
  let answer = -2
  
   for(let i = 0 ; i < k; i ++){
       answer += 2
       answer = answer % numbers.length
   }
    return numbers[answer]
}