function solution(picture, k) {
    let arr = []
   for(let i = 0; i<picture.length; i++){
      for(let j = 0; j< k; j++){
          arr.push(picture[i])
      }
   } 
   for(let i = 0; i<arr.length; i++){
       let newWord = ''
      for(let j = 0; j<arr[i].length; j++){
          newWord += arr[i][j].repeat(k)
      }
       arr[i] = newWord
   }
    return arr
}