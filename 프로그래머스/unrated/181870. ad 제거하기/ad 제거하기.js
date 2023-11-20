function solution(strArr) {
    let answer = []
    for(let i = 0 ; i < strArr.length; i++){
         let containsAd = false;
        for(let j = 0; j<strArr[i].length-1; j++)
        if(strArr[i][j] === 'a' && strArr[i][j+1] === 'd'){
            containsAd = true;
        }
      if (!containsAd) {
            answer.push(strArr[i]);
        }
    }
    return answer
}