function solution(board, moves) {
    let answer = 0
    let stack = []
   for(let i = 0; i< moves.length; i++){
       let number = moves[i]-1
       for(let j = 0; j < board.length; j++){
           if(board[j][number] !== 0){
               if(stack[stack.length-1] === board[j][number]){
                   answer += 2
                   stack.pop()
               }else {
                   stack.push(board[j][number])
               }
               board[j][number] = 0;
               break;
           }
       }
   }
    return answer;
}