function solution(n) {
    let arr = []
  let answer = 0;
  for(let i = 1; i<=n; i++){
   arr.push(i)
  }

  for(let i =0; i<arr.length; i++){
let result =0;
    for(let j=1; j<=n; j++){
      
      if(arr[i] % j === 0){
        result++
      }
    }
    if(result >=3)answer++
  }
    return answer;
}