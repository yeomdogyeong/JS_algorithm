function solution(n, lost, reserve) {
//잃어버렸고, 여분이 있는 학생
    let both = lost.filter(el=> reserve.includes(el))
    lost = lost.filter(el=> !both.includes(el)).sort((a,b)=> a-b)
    reserve = reserve.filter(el=> !both.includes(el)).sort((a,b)=> a-b)

    //잃어버렸지만 여분이 없는 학생
   for(let i = 0; i<lost.length; i++){
     if (reserve.includes(lost[i]-1)) {
            reserve.splice(reserve.indexOf(lost[i]-1), 1); 
            lost.splice(i,1); 
            i -= 1 
        } else if (reserve.includes(lost[i]+1)) {
            reserve.splice(reserve.indexOf(lost[i]+1), 1); 
            lost.splice(i,1); 
            i -= 1 
        } 
   }
    return n - lost.length
}