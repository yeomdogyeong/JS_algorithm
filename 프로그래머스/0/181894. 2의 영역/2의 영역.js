function solution(arr) {
    let index = [];
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 2){
            index.push(i);
        }
    }
    
    if(index.length === 0){
        return [-1];
    }
    
    let start = index[0];
    let end = index[index.length - 1];
    
    return arr.slice(start, end + 1);
}