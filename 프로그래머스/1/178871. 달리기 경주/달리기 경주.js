function solution(players, callings) {
    const playersObj = {};
    for(let i =0; i<players.length; i++){

        playersObj[players[i]] = i;
    }
  
    for(let i=0; i< callings.length; i++){
        let index = playersObj[callings[i]]
        let change = players[index-1]
        //callings에서 나온 요소와 그 앞의 요소를 서로 바꿈
        players[index-1] = callings[i]
        players[index] = change;
         //객체에서도 각자의 순서를 바꿔줌
        playersObj[callings[i]] = index-1;
        playersObj[change] = index;
    }
    return players;
}