function solution(num_list, n) {
    let answer = num_list.slice(n)
    let answer2 = num_list.slice(0,n)
   let result = answer.concat(answer2); 

    return [...answer,...answer2]
}