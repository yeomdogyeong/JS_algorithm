function solution(number, limit, power) {
    let arr = new Array(number).fill(1);
    let answer = 0;
    for(let i =1; i<=number; i++){
        let index = 1;
        while(index <= i / 2){
            if(i % index === 0) {
                arr[i-1]++
            }
            index++
        }
    }
    for(let i = 0; i<arr.length; i++){
    if(arr[i] >limit){
        answer += power
    }else{
        answer += arr[i]
    }
    }
    return answer;
}