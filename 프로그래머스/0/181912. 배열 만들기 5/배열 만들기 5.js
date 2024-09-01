function solution(intStrs, k, s, l) {
    let answer = []
    for(let i = 0; i<intStrs.length; i++){
        const element = intStrs[i]
        const sliceEle = element.slice(s,s+l)
        if(sliceEle > k && !answer.includes(sliceEle)){
            answer.push(Number(sliceEle))
        }
    }
    return answer;
}