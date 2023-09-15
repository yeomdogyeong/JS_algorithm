function solution(num_list) {
    let hol = 0;
    let jac = 0;
   for(let i=0; i<num_list.length; i++){
       if(i % 2 === 1){
           hol += num_list[i]
       }else if(i % 2 === 0){
           jac += num_list[i]
       }
   }
    if(hol >= jac) return hol
    else if(hol < jac) return jac
}