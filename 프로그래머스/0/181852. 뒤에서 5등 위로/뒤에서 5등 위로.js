function solution(num_list) {
   num_list.sort((a,b)=> a-b)
    console.log(num_list)
    return num_list.slice(5)
}