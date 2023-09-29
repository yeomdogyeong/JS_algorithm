function solution(k, m, score) {
  
   score.sort()
    
 const division = (score, m) => {
     const divide = Math.floor(score.length/m)
     const newArray = [];
     
     for(let i = 0; i < divide; i++){
         newArray.push(score.splice(-m))
     }
     return newArray;
 }
  const result = division(score,m)
  
const multiply = (result, m) => {
    return result.reduce((total,cur)=> {
        let min = Math.min(...cur)
        return total + (min * m)
    },0)
}
 
 return multiply(result, m)


}