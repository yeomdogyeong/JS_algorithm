function solution(array, height) {
    let answer = array.filter((x)=> x > height)
    return answer.length
}