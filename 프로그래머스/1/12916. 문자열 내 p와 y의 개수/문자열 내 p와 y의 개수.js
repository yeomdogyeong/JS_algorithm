function solution(s){
   let lower = s.toLowerCase()
   let pNum = 0
   let yNum = 0
    for(let i = 0; i<lower.length; i++){
    if(lower[i] === 'p')pNum += 1
    if(lower[i] === 'y')yNum += 1
   }
    if(pNum !== yNum)return false
    else return true
}