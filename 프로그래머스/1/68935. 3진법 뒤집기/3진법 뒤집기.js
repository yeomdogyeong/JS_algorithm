function solution(n) {
    let three = ''
    let answer = 0
   while(n > 0){
       three += n % 3
       n = Math.floor(n / 3)

   }
    for(let i = 0; i<three.length; i++){
        let minus = three.length - 1
        answer += Number(3 ** (minus - i) * three[i])
    }
    return answer;
}