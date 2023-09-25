function solution(n, control) {
   const cal = {
       'w' : n => n+1,
       's' : n => n-1,
       'd' : n => n+10,
       'a' : n => n-10
   }
   for(let el of control){
       if(cal[el]){
           n = cal[el](n)
       }
   }
    return n
}