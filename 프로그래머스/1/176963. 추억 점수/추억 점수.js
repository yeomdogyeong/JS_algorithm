function solution(name, yearning, photo) {
    let result = []
  for(let i = 0 ; i< photo.length; i++){
      let answer = 0
    for(let j = 0; j< photo[i].length; j++){
        let index = name.indexOf(photo[i][j])
        if(index !== -1){
            answer += yearning[index]
        }
    } 
      result.push(answer)
  }
    return result
}

//name배열에 있는 el들이 photo 배열 안의 배열 요소라면, name의 index값을 yearning의 index값에 적용시키고
//(해당 index들의 합)을 result배열의 el로 적용시킨다