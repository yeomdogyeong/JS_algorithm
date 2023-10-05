function solution(rank, attendance) {
    let arr = []
  for(let i =0 ; i < attendance.length; i++){
      if(attendance[i] === true){
          //boolean값이 true인 index를 추출한 배열
          arr.push(i)
      }
  }
  const result = arr.map(i => rank[i]).sort().slice(0,3)
  
    
  const answer = result.map(el => rank.indexOf(el))
 
    return 10000 * answer[0] + 100 * answer[1] + answer[2] 
  
}