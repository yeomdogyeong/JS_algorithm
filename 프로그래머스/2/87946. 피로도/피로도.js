function solution(k, dungeons) {
    //도는 경로를 모은 배열
    let answer = 0
    //dungeon의 수만큼 나열되고 false로 채워진 배열생성
    const visited = new Array(dungeons.length).fill(false)
    
    function dfs(hp, count){
       
        for(let i = 0 ; i<dungeons.length; i++){
         
            if(!visited[i] && dungeons[i][0] <= hp){

                visited[i] = true;
                dfs(hp-dungeons[i][1], count + 1)
                visited[i] = false;
          
            }
        }
        answer = Math.max(answer, count)
    }
 
    dfs(k,0)
    
    return answer;
    
}