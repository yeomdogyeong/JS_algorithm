function solution(a, b) {
   let today = ["SUN","MON","TUE","WED","THU","FRI","SAT"]
   let mon = [31,29,31,30,31,30,31,31,30,31,30,31]
   let dayPlus = b+4
   for(let i = 0 ; i < a-1; i++){
       dayPlus += mon[i]
   }
    return today[dayPlus%7]
}