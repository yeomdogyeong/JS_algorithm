function solution(record) {
    const map = new Map();
    let answer = [];
    record.forEach((el) =>
     { const spl = el.split(' ')
            // console.log(spl)  
        if(spl[0] === 'Enter' || spl[0] === 'Change'){
            map.set(spl[1] , spl[2])
            // console.log(map)  
     }
       }
         )

    record.forEach((el) => {
    const spl = el.split(' ')
    let name = map.get(spl[1])
        if(spl[0] === 'Enter'){
            answer.push(`${name}님이 들어왔습니다.`)
        }else if(spl[0] === 'Leave'){
            answer.push(`${name}님이 나갔습니다.`)
        }
    })
    
    return answer;
}