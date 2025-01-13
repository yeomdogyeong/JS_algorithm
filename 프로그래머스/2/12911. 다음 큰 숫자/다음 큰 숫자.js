function solution(n) {
    //2진수일때 1포함한 수
    const countOnes = (num) => num.toString(2).split('1').length-1
    const main = countOnes(n)
    let next = n+1
    while(true){
        if( countOnes(next) === main){
             return next;
        }
       next++;
    }
    console.log(countOnes)
}