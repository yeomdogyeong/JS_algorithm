function solution(order) {
    let answer = 0
    let string = String(order)
    for(let i = 0; i<string.length; i++){
        if(string[i] === '3')answer += 1
        if(string[i] === '6')answer += 1
        if(string[i] === '9')answer += 1
    }
    return answer;
}