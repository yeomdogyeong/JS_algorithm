function solution(n, m) {

   const CalMax = (i,j) => {
     if(j === 0) return i;
       return CalMax(j, i % j)
   }

    const CalMin = (i,j) => {
       return (i * j) / CalMax(i,j)
   }
    
    return [CalMax(n,m), CalMin(n,m)]
}

  
