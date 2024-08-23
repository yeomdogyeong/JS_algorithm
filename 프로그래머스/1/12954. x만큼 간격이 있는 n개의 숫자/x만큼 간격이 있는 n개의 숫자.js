function solution(x, n) {
const newArray = new Array(n).fill(0)

    const endLength = x * n
    for(let i = 1; i<=n; i++){
        newArray[i-1]= x * i
console.log( newArray[i])
    }
    return newArray;
}