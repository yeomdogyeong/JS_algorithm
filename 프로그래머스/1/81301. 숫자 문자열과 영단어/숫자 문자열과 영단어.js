function solution(s) {
   let object = {'zero':0,'one':1,'two':2, 'three':3, 'four':4, 'five':5, 'six':6, 'seven':7, 'eight':8, 'nine' : 9}
   let answer = ''
   for(let el in object){
       console.log(`${el} : ${object[el]}`)
    //s가 object의 key를 가지고있을동안은 계속 실행됨  
    while(s.includes(el)){
        s = s.replace(el,object[el])
    }
   }
    return parseInt(s)
}