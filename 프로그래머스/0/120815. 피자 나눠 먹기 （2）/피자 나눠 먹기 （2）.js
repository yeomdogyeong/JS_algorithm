function solution(n) {
  //solution : 6 * ? % n === 정수
    // for(let i =1 ;i<n; i++){
    //     const num = 6 * i
    //     if(num % n === 0){
    //         return i;
    //     }
    // }
    let i = 1;
    while(true){
        let num = 6 * i;
        if(num % n === 0){
            return i
        }
        i++
    }
}