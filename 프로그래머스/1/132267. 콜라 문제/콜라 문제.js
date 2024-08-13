function solution(a, b, n) {
 
    let total = 0
    while(n >= a){
        let coke = Math.floor( n / a) * b
        total += coke
        n = coke + (n % a)
    }
     return total
}