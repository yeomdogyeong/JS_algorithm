function solution(str1, str2) {
    let answer = ''
for(let i =0; i < str1.length; i++){
    if(str1.length === str2.length){
    answer += str1[i] + str2[i]
} 
}


    return answer
}