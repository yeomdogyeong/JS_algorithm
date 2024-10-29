function solution(k, score) {
    //k의 길이만큼 0으로 채워져 있는 배열
     let stack = []
    let answer = []
    for(let i=0; i<score.length; i++){
        stack.push(score[i])
        //내림차순으로 정렬
        stack.sort((a,b)=> b-a)
        if(stack.length > k){
            stack.pop()
            }
         answer.push(stack[stack.length - 1])    
        }
        return answer;
    }
