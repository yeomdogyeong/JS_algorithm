function solution(slice, n) {
   if(n % slice === 0)return n/slice
    else return Math.ceil(n/slice)
}