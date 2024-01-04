function solution(num_list) {
    let one = []
    let two = []
   for(let i = 0 ; i<num_list.length; i++){
       if(num_list[i] % 2 === 0){
           two.push(num_list[i])
       }else one.push(num_list[i])
   }
    return [two.length,one.length]
}