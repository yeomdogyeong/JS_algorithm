function solution(participant, completion) {
    //완주하지못한 선수 return
    //participant에 있고, completion에 없는값
    //참가자 중에는 동명이인이 있을수있음
    
    const map = new Map()

    participant.forEach((element)=> {
        //동명이인이 있으면 value + 1
        if(map.has(element)){
            map.set(element, map.get(element)+1)
        }else{
            map.set(element,1)
        }
    })

    completion.forEach((element)=> {
        if(map.has(element)){
            //동명이인이 있을때 value -1
            map.set(element, map.get(element)-1)
            //그리고 나서 value값이 0이면 delete
            if(map.get(element) === 0){
                map.delete(element)
            }
        }
    })
   
console.log(map.keys())
    const notFinish = Array.from(map.keys())
    return notFinish.join('')
}