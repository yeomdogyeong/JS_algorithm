function solution(s) {
    let splitS = s.split('')
   
   let arr = []
   let arr2 = []
let answer = 0
    arr.push(splitS[0])

    for(let i =1; i<splitS.length; i++){
        if(arr[arr.length-1] ===splitS[i] || arr.length === 0){
             arr.push(splitS[i])
        }else{
            arr2.push(splitS[i])
        }

        if(arr.length === arr2.length){
            answer++
            arr = []
            arr2 = []
            }
        }  
            if(arr.length !== 0){
            answer++
        }
       console.log('1', arr, '2', arr2 ,'result', answer)
    return answer;
    }
