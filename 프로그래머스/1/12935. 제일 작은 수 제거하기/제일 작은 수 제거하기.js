function solution(arr) {
 //   arr.sort((a,b)=> b-a).pop()
 //    console.log(arr)
 // return arr.length === 0 ? [-1] : arr

    let min = Math.min(...arr)
    let index = arr.indexOf(min)
    arr.splice(index,1)

return arr.length === 0 ? [-1] : arr
}