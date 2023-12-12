function solution(x) {
   let spl = String(x).split('')
    console.log(spl)
   let sum = 0
  for(let i = 0; i<spl.length; i++){
      sum += Number(spl[i])
  }
    return x % sum === 0 ? true : false
}