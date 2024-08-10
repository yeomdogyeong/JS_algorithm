function solution(numbers, direction) {
   let answer = []
   for(let i =0; i<numbers.length; i++){
       if(direction === 'right'){
                if(i === 0){
                    answer.push(numbers[numbers.length-1])
                }else{
                     answer.push(numbers[i-1])
                }
        }

        if(direction === 'left'){
                if(i !== numbers.length - 1){
            answer.push(numbers[i+1])
                   
                }else{
                    answer.push(numbers[0])
                }
        }
   }
    return answer;
}