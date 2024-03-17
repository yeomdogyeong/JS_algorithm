function solution(array) {
    let half = Math.floor(array.length / 2)
    array.sort((a,b)=> a-b)
    console.log(array, half)
    return array[half]
}