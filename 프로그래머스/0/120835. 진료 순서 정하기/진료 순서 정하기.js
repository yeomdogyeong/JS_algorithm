function solution(emergency) {
    let arr = [...emergency].sort((a,b) => b-a)
    
    let result = new Array(emergency.length).fill(0)
    console.log(arr);
    let count = 1;
    for(let i = 0 ; i<emergency.length; i++){
        let idx = emergency.indexOf(arr[i])
        
        result.splice(idx, 1, count)
        
        count++
    }
    return result;
}