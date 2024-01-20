function solution(X, Y) {
    const x = X.split('');
    const y = Y.split('');
    let answer = ''
    
    for(let i = 0; i<10; i++){
        const curX = x.filter(el => Number(el) === i).length
        const curY = y.filter(el => Number(el) === i).length
        answer += String(i).repeat(Math.min(curX,curY))
    }
    
    if(answer === '') return '-1'
    if(Number(answer) === 0) return '0'
    return answer.split('').sort((a,b) => b-a).join('')
}