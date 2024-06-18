function solution(strArr) {
    let arr = {}
    for(let i = 0;i<strArr.length; i++){
        const length = strArr[i].length
        if(!arr[length]){
            arr[length] = 1
        }else{
            arr[length]++
        }
    }
   console.log(arr)
   let maxX = 0;
    for(let key in arr){
        if(arr[key] > maxX){
            maxX = arr[key]
        }
    }
    return maxX
}