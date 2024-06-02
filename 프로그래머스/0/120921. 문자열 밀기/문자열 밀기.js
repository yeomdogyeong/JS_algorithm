function solution(A, B) {
    if(A.length !== B.length){
        return -1
    }
    let temp = A
    for(let i = 0; i<A.length; i++){
        if(temp === B){
            return i;
        }
        
        temp = temp[temp.length - 1] + temp.slice(0, temp.length-1)
    }
    return -1;
}