function solution(rank, attendance) {
    let arr = []
  for(let i =0 ; i < attendance.length; i++){
      if(attendance[i]){
          //boolean값이 true인 index를 추출한 배열
          arr.push(rank[i])
      }
  }
    arr.sort((a,b) => a - b)
const answer = (i) => {
    return rank.indexOf(arr[i])
}
  return 10000 * answer(0) + 100 * answer(1) + answer(2);
}