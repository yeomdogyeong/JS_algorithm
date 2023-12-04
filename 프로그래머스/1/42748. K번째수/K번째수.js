function solution(array, commands) {
     let answer = []
  for(let i = 0; i< commands.length; i++){
     let [start, end, number] = commands[i]
     
     let sliceArray = array.slice(start-1, end)
     let sortArray = sliceArray.sort((a,b)=>a-b)
     answer.push(sortArray[number-1])
  }
    return answer
}