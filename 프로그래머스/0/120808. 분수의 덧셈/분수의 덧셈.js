function solution(numer1, denom1, numer2, denom2) {
//최소공배수를 구해
    const denom = denom1 * denom2
    const numerF = numer1 * denom2
    const numerS = numer2 * denom1
    let [a,b] = [numerF + numerS, denom]
    console.log(a,b)
    //밑은 최대공약수
    let gcd = 1;
    const min = Math.min(a,b);
    for(let i = 2; i<=min; i++){
        if(a % i === 0 && b % i === 0){
            gcd = i
        }
    }
console.log(gcd)
    const [c,d] = [Math.floor(a / gcd), Math.floor( b / gcd)]
    return c === d ? [1,1] : [c,d]
}