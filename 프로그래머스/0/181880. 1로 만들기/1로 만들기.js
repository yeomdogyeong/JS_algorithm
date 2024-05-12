function solution(num_list) {
    let result = 0
for(let el of num_list){
   while(el !== 1){
       
           if(el % 2 === 0){
               el = el / 2
               result += 1
           }else{
               const minus = el - 1
               el = minus / 2
                result += 1
           }
       }
   }
    return result;
}