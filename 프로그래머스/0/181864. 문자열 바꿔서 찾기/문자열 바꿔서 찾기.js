function solution(myString, pat) {
   let arr = myString.split('')
   let answer = []
   
    arr.forEach((el)=> el === 'A' ? answer.push('B') : answer.push('A'))
    answer.join('')
console.log( answer.join(''))
    if (answer.join('').includes(pat))return 1
    else return 0
}