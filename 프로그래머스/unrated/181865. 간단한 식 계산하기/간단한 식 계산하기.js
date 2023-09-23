function solution(binomial) {
const [a,op,b] =  binomial.split(' ')
const el = {
    '+' : (a,b) => a+b,
    '-' : (a,b) => a-b,
    '*' : (a,b) => a*b
}
return el[op](Number(a), Number(b))
}