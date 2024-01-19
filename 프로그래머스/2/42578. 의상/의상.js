function solution(clothes) {
    let answer = 1
    const clothesObj = {}

    clothes.forEach(arr =>{
        let [el,type] = arr
        if(clothesObj.hasOwnProperty(type)){
            clothesObj[type]++
        }else{
            clothesObj[type] = 1
        }

    })
   
    for(let key in clothesObj){
        answer *= clothesObj[key] + 1
    }
    
    return answer -1;
}