function solution(num_list) {
    let a = ''
    let b = ''
   for(let i =0; i< num_list.length; i++){
       if(num_list[i] % 2 === 0){
           a += String(num_list[i])
       }else b += String(num_list[i])
           
   }
    return Number(a) + Number(b)
}