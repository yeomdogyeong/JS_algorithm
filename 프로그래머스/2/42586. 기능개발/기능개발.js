function solution(progresses, speeds) {
   const extra = progresses.map((x)=> 100 - x)
   const divide = []
   for(let i = 0; i<progresses.length ;i++){
       divide.push(Math.ceil(extra[i] / speeds[i]))
   }
    console.log(divide)
    let comp = divide[0]
    let answer = [0]
    for(let j = 0, k = 0; j < divide.length; j++){
        if(divide[j] <= comp){
            answer[k] ++
        }else if(divide[j] > comp){
            comp = divide[j]
            answer[++k] = 1
        }
    }
    
    return answer;
}