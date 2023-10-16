function solution(ingredient) {
    let answer = 0
    const stack = []

 ingredient.forEach(el =>{
     stack.push(el)
     //stack배열에서 뒤에서부터 4개씩 자름
     if(stack.slice(-4).join('') === '1231'){
         //stack의 뒤에서부터 4개씩 자른 새로운 배열을 생성
         stack.splice(stack.length-4,4)
         answer++
     }
 })
   
    return answer
}