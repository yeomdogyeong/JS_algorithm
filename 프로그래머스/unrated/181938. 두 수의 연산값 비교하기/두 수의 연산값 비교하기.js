function solution(a, b) {
   let answerA = Number(String(a)+String(b))
   let answerB = 2 * a * b

    if(answerA >= answerB) return answerA
    else if(answerA < answerB) return answerB
   
}