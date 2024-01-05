function solution(n) {
    let arr = new Array(n).fill(1)
    
    arr[0] = 0
    
    for(let i = 2; i*i<=n; i++){
        for(let j = i*i; j<=n; j += i){
            arr[j-1] = 0
        }
    }
   return arr.filter(el => el === 1).length
}