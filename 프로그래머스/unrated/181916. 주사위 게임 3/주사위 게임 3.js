function solution(a, b, c, d) {

let arr = [a,b,c,d]
let arrAll = arr.every((el)=> el === arr[0])

const Investigate = (val) => {
    return arr.filter(el=> el ===val).length
}

if(arrAll) return 1111 * arr[0]
for (let i = 0; i < arr.length; i++) {
        if (Investigate(arr[i]) === 3) {
            const anotherNumber = arr.find(el => el !== arr[i]);
            return (10 * arr[i] + anotherNumber) ** 2;
        }
    }
for( let i =0; i< arr.length; i++) {
    if(Investigate(arr[i]) === 2){
        const [p,q] = arr.filter(el => el !== arr[i])

        if(p !== q){
            return p * q;
        }else {
            return (arr[i] + p) * Math.abs(arr[i] - q)
        }
    }
}
return Math.min(...arr)
}
