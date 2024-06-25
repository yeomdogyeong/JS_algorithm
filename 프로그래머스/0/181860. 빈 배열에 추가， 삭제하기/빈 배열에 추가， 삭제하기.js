function solution(arr, flag) {
   let X = [];
for(let i =0; i<flag.length; i++){
    if(flag[i]){
      let count = arr[i] * 2;
            for (let j = 0; j < count; j++) {
                X.push(arr[i]);
            }
    }else{
        X.splice(-arr[i])  
    }
}
    return X
}