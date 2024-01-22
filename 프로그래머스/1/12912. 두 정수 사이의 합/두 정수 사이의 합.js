function solution(a, b) {
    let answer = 0;
    let small = 0;
    let big = 0;
    
    if(a === b)return a;
    
    if(a < b){
        small = a,
        big = b
    }else if(a > b){
        small = b,
        big = a
    }
    for(let i = small; i<=big; i++){
        answer += i
    }
    return answer;
}