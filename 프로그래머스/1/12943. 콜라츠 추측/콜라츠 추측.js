function solution(num) {
    if(num === 1)return 0
    
    let result = 0;
    
   while(result <= 500){
        num = num % 2 === 0 ? Math.floor(num/2) : num * 3 + 1
       result++
       if(num === 1) return result;
    }
    return -1;
}