function solution(quiz) {
  
    return quiz.map(el=> {
        let [calc, result] = el.split('=')
        let flminus = calc.includes('+') ? 1 : -1    
        let [x,y] = calc.split(flminus === 1 ? ' + ' : ' - ')
        
        return +x + (+y * flminus) === +result ? 'O' : 'X'
    }
        
                   )
}