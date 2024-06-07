function solution(numbers, hand) {
   const keyPad = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        ['*', 0, '#']
    ];

    const obj ={}
    
    for(let i =0; i<keyPad.length; i++){
        for(let j = 0; j<keyPad[1].length; j++){
            obj[keyPad[i][j]] = [i,j]
        }
    }
console.log(obj)
    
    let leftPosi = obj['*']
    let rightPosi = obj['#']

    let answer = '';
    
    for(let number of numbers){
        if(number === 1 || number === 4 || number ===7){
            answer += 'L'
            leftPosi = obj[number]
        }else if(number === 3 || number ===6 || number === 9){
            answer += 'R'
            rightPosi = obj[number]
        }else{
            //가운데일때 거리 계산

        const [lx, ly] = leftPosi;
        const [rx, ry] = rightPosi;
        const [nx, ny] = obj[number];
            
        const leftLength = Math.abs(lx - nx) + Math.abs(ly - ny)
        const rightLength = Math.abs(rx - nx) + Math.abs(ry - ny)
        
        if(leftLength > rightLength || (hand ==='right' && leftLength === rightLength)){
           answer += 'R'
           rightPosi = [nx, ny]
           }else{
            answer += 'L'
               leftPosi = [nx, ny]
        }
    }
    }
return answer;
}