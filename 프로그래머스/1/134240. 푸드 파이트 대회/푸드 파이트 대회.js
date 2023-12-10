function solution(food) {
    let arr = []
    let answer = ''
  for(let i = 0; i<food.length; i++){
   let mok = Math.floor(food[i] / 2)
   console.log(mok)
      for(let j = 0; j<mok; j++){
          arr.push(i)
      }
  }
    let string = arr.join('')
   let rev = arr.reverse().join('')

    answer += string + 0 + rev
    return answer
}