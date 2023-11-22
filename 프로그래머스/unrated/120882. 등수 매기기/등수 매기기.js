function solution(score) {
    let answer = []
   for(let i = 0; i<score.length; i++){
       for(let j = 0; j<score[i].length-1; j++){
           let sum = score[i][j] + score[i][j+1]
           let average = sum / 2
           answer.push(average)
       }
   }
   let sorted = answer.slice().sort((a,b) => b-a)
   console.log(answer)
   console.log(sorted)
   return answer.map(el => sorted.indexOf(el) + 1)
}