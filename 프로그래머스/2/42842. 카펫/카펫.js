function solution(brown, yellow) {
 let sum = brown + yellow
 let answer = []
 //return값 요소의 곱은 sum이다
 //width,heigt중 값을 나누면 나머지요소가 됨
 for(let i = 3; i<sum; i++){
     let width = sum / i
     let height = i
     
     if(width<height)continue
     
     if((width-2)*(height-2) === yellow){
         answer[0] = width;
         answer[1] = height;
     }
 }
    return answer
}