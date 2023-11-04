function solution(chicken) {
    let extra = chicken //현재 쿠폰수
    let answer = 0 // 서비스 치킨의 수
    
    while(extra > 9){//현재 쿠폰수가 10장 이하면 식을 끝냄
        answer += Math.floor(extra / 10)
        extra = Math.floor((extra / 10) + (extra % 10))
    }
    return answer;
}