function solution(d, budget) {
    let sortD = d.sort((a,b)=> a-b)
    console.log(sortD)
    let answer = 0
   for(let i = 0 ; i<d.length; i++){
       if(sortD[i] <= budget){
           answer++
           budget = budget - sortD[i]
       }
   }
    return answer
}