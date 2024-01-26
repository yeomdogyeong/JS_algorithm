function solution(t, p) {
    let pLength = p.split('').length
    let arr = t.split('')
    let arr2 = []
    let answer = 0
    for(let i = 0 ; i<arr.length; i++){
        arr2.push(arr.slice(i,pLength+i))
      
     }   
    let arr3 = arr2.filter(el => el.length === pLength)
    let result = arr3.map(el => Number(el.join('')))
                         console.log(result)
    for(let i = 0; i<result.length; i++){
        if(result[i] <=Number(p)) answer++
    }
    return answer
}