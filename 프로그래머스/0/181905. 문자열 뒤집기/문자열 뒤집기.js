function solution(my_string, s, e) {
    if(s === e)return my_string;
    const slicing = my_string.slice(s,e+1).split('')
    const first = my_string.slice(0,s)
    const last = my_string.slice(e+1,my_string.length)
    console.log(last)
    
    return first + slicing.reverse().join('')+last
}