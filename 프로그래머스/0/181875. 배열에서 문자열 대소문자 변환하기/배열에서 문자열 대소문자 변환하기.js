function solution(strArr) {
    let result = new Array(strArr.length).fill('');
    for(let i = 0; i<strArr.length; i++){
        if(i % 2 === 0){
            result[i] += strArr[i].toLowerCase()
        }else{
            result[i] += strArr[i].toUpperCase()
        }
    }
    return result
}