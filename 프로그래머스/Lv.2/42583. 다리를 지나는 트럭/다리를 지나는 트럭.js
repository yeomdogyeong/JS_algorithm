function solution(bridge_length, weight, truck_weights) {
   //선입선출 que
    let que = new Array(bridge_length).fill(0)
    let sum = 0
    let answer = 0

    //처음에 다리에 차를 올려놓음
    answer++
    sum = truck_weights[0]
    que.shift()
    que.push(truck_weights.shift())
       
    //다리에 올려진 차의 합이 0이 되기 전까지 반복
    while(sum > 0){
        answer++
        sum = sum - que.shift()
        
        if(sum + truck_weights[0] <= weight && truck_weights.length > 0){
            sum = sum + truck_weights[0]
            que.push(truck_weights[0])
            truck_weights.shift()
        }else{
            que.push(0)
        }
    }
    return answer;
}