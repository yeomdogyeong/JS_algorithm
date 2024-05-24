function solution(M, N) {
    let max = Math.max(M,N)
    let min = Math.min(M,N)
    console.log(max, min)
    return (min-1) + (min * (max -1))
}