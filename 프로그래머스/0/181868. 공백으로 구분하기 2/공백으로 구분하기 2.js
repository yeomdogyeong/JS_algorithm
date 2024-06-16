function solution(my_string) {
    const neww=my_string.trim().split(' ')
    const result = neww.filter((el)=> el !== '')
    return result;
}