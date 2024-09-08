function solution(numbers) {
   let object = {'one':1,'two':2,'three':3,'four':4,'five':5,'six':6,'seven':7,'eight':8,'nine':9,'zero':0}
 
   let result = ''
  while(numbers.length > 0){
      for(let key in object){
          if(numbers.startsWith(key)){
              result += object[key]
              numbers = numbers.substring(key.length)
          }
      } 
  }
  return parseInt(result)
   
}