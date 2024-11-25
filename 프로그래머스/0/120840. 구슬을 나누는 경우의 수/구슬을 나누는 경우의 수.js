function mango(props) {
    let answer = BigInt(1);
    for (let i = 1; i <= props; i++) {
        answer = answer * BigInt(i);
    }
    return answer;
}
 
function solution(balls, share) {
    // n = balls , m = share
    const n = balls;
    const m = share;
    
    return mango(n) / (mango(m) * mango(n - m));
}
