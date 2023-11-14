function solution(s) {
   let arr = s.split(' ')
   let answer = 0
   
   arr.forEach((el,index) => {
       if(el === 'Z'){
           answer -= Number(arr[index-1])
       }else{
           answer += Number(arr[index])
       }
   })
   return answer;
}