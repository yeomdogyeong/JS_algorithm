function solution(n, lost, reserve) {
    //도난당하고 여분이 있는 학생
    //공통된 부분 => lost랑 reserve에 각각 뺄거임
    const common = lost.filter((el)=> reserve.includes(el))
    lost = lost.filter((el)=> !common.includes(el)).sort((a,b)=> a-b)
    reserve = reserve.filter((el)=> !common.includes(el)).sort((a,b)=> a-b)
    //이제 lost와 reserve는 공통된 학생이 제거된 배열임.
    //reserve에서 + - 값인 애들있으면 빼면됌
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
    return n - lost.length;
}