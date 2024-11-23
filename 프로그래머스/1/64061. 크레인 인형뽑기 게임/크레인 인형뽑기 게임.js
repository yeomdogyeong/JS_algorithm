function solution(board, moves) {
    let answer = 0
    let stack = []
   for(let i = 0; i< moves.length; i++){
       let number = moves[i]-1
       for(let j = 0; j < board.length; j++){
         // board의 값중에 원하는 인덱스 중에서 0이 아닌 값을 발견했을때
           if(board[j][number] !== 0){
             //내가 만든 배열에서 마지막 값이 해당 값과 일치한다면
               if(stack[stack.length-1] === board[j][number]){
                 //값을 증가시키고
                   answer += 2
                 //stack에서 해당 값을 제외한다
                   stack.pop()
               }else { 
                 //마지막 값이 일치하지 않는다면 stack배열에 집어넣는다.
                   stack.push(board[j][number])
               }
             //0이 아닌 값을 찾았으니 해당 값을 0으로 만들고 반복문종료
               board[j][number] = 0;
               break;
           }
       }
   }
    return answer;
}