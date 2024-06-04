function solution(i, j, k) {
    let result = 0;
    for(let mango = i; mango<=j; mango++){
      for(let n = 0; n < String(mango).length; n++){
          if(String(mango)[n].includes(k))result++
      }
    }
    return result;
}