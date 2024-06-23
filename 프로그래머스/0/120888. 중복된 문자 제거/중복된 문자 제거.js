function solution(my_string) {
    //중복된 문자열 제거 set사용
    const some = new Set(my_string)
    let arr = []
    
    for(let el of some){
        arr.push(el)
    }
    return arr.join('')
}