function solution(absolutes, signs) {
    const arr = []
    let some = 0
    for(let i=0; i<absolutes.length; i++){
        if(signs[i] === true){
            arr.push(absolutes[i])
        }else{
             arr.push(-absolutes[i])
        }
        some += arr[i]
        console.log(some)
    }
   return some
}