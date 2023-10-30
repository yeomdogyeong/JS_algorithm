function solution(n, k) {
   const sheep = n * 12000
   const drink = k * 2000
   const serve = Math.floor(n / 10) * 2000
   return sheep + drink - serve
}