function solution(my_string) {
    let moeum = ['a','e','i','o','u']
    let answer = ''
    for(let i = 0; i< my_string.length; i++){
        if(moeum.includes(my_string[i])){
            continue;
        }else{
            answer += my_string[i]
        }
    }
    return answer
}