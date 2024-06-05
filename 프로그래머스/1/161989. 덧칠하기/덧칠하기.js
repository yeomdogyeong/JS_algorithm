function solution(n, m, section) {
   let arr = new Array(n).fill(1)
    let result = 0;
    for(let i = 0; i<section.length; i++){
      arr[section[i]-1] = 0
    }
    console.log(arr)
    
    for(let i = 0; i<arr.length; i++){
        if(arr[i] === 0){
            result++
            i = i + m - 1
        }
    }
    return result;
}