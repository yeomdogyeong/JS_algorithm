function solution(k, dungeons) {

    let answer = 0
    for(let i = 0; i<dungeons.length; i++){
            if(dungeons[i][0] <= k){
                k = k - dungeons[i][1]
                answer++
            }else continue;
    }
    return answer
}