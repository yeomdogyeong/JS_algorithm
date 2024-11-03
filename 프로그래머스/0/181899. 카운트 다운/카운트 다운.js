function solution(start_num, end_num) {
    let length = start_num - end_num + 1
    //밑처럼 result를 변수로 설정할거면 swift()로 따로 빼줘야하니까 그냥 빈배열로 설정
    // let result = new Array(length).fill(0)
    let result = []
    // for(let i=start_num; i<=length; i--){
    //     result.push(i)
    //     console.log(i)
    // }
    let int = start_num;
    //처음에 실패한 조건 int === end_num으로 했을 때 해당 조건에서만 식이 실행되어서
    //아예 식이 안돌아감
    while(int >= end_num){

        result.push(int)
        int--
       
    }
    return result;
}