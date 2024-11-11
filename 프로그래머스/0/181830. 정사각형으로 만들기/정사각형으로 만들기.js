function solution(arr) {
    const hang = arr[0].length
    const yeul = [...arr].length
   
    if(hang === yeul) return arr
  
    if(hang > yeul){
        for(let i = yeul; i<hang; i++){
            const someArr = new Array(hang).fill(0);
            arr.push(someArr)
        }
    }else{ 
       for (let i = 0; i < arr.length; i++) { 
            for(let j = 0; j<yeul-hang; j++){
                 arr[i].push(0)
            }
           
            }
    }
    return arr
}