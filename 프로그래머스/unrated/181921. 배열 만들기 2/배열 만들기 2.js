function solution(l, r) {
    let answer = [];
   for(i=l; i<=r; i++){
       if(realFive(i)){
           answer.push(i)
       }
   }
    return answer.length?  answer : [-1]
}

const realFive = (num) => {
    for(let el of num.toString()){
        if(el !=='0' && el !=='5')return false;
    }
       
   return true;
}