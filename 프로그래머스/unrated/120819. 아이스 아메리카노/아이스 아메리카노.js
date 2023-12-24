function solution(money) {
    const number = Math.floor(money/5500)
    const extra = money - (5500 * number)
    
    return [number,extra]
}