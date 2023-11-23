function solution(s) {
  const word = s.split(' ')
  
  for(let i = 0; i<word.length; i++){ 
     let newWord = ''
      for(let j = 0; j < word[i].length; j++){
          if(j % 2 === 0 ){
             newWord += word[i][j].toUpperCase()
          }else {
              newWord += word[i][j].toLowerCase()
          }
      }
      word[i] = newWord
  }
    return word.join(' ')
}