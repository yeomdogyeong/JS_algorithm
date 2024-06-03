function solution(board) {
   let number = board.length;
    let dangerZone = Array.from(Array(number), ()=> Array(number).fill(0))
    
     for (let i = 0; i < number; i++) {
        for (let j = 0; j < number; j++) {
            if(board[i][j] === 1){
                dangerZone[i][j] = 1;
                //위쪽이 배열의 범위 안인지 확인
                if(i-1 >=0){
                    dangerZone[i-1][j] = 1;
                }
                if(i+1 < number){
                    dangerZone[i+1][j] = 1;
                }
                if (j - 1 >= 0) {
                    dangerZone[i][j-1] = 1;
                }
                if (j + 1 < number){
                    dangerZone[i][j+1] = 1;
                }
// 왼쪽 위 대각선
                if (i - 1 >= 0 && j - 1 >= 0) {
                    dangerZone[i - 1][j - 1] = 1;
                }

                // 오른쪽 위 대각선
                if (i - 1 >= 0 && j + 1 < number) {
                    dangerZone[i - 1][j + 1] = 1;
                }

                // 왼쪽 아래 대각선
                if (i + 1 < number && j - 1 >= 0) {
                    dangerZone[i + 1][j - 1] = 1;
                }

                // 오른쪽 아래 대각선
                if (i + 1 < number && j + 1 < number) {
                    dangerZone[i + 1][j + 1] = 1;
                }
            }
        }
    }
    let answer = 0;
    for(let i =0; i<number; i++){
        for(let j=0; j<number; j++){
            if(board[i][j] === 0 && dangerZone[i][j] === 0){
                answer++
            }
        }
    }
    return answer;
}