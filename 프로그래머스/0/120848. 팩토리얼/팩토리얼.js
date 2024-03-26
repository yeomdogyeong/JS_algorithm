function solution(n) {
    let answer = 1
    for(let i= 1; ; i++){
        answer *= i
        console.log(answer)
        if(answer > n){
            return i-1
        }
    }
}
