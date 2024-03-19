function solution(my_string, indices) {
    let my_string2 = my_string.split('')
    //indices에 속하지 않는 index만 필터링
    let filteredString = my_string2.filter((item, index) => !indices.includes(index))
    return filteredString.join('')
}