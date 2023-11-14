function solution(s) {
    let arr = s.split(' ')
    let length = arr.length
    let answer = 0
    let minus = 0;
    console.log(arr)
   for(let i = 0; i < arr.length; i++){
      
       if(arr[i] === 'Z'){
          answer -= minus;
       }else{
            answer += arr[i]*1
            minus = arr[i]*1
        }
   }
    return answer;
}