function solution(a, b) {
    
 let answerA = ''
 let answerB = ''
    answerA = a.toString() + b.toString()
    answerB =  b.toString() +  a.toString()
if(Number(answerA) > Number(answerB) || Number(answerA) === Number(answerB)){
    return Number(answerA)
}else return Number(answerB)
    
}