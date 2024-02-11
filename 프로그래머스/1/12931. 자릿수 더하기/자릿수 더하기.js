function solution(n)
{
  let str = String(n).split('')
  console.log(str)
  let answer = 0
    for(let i = 0 ; i<str.length; i++){
        console.log(str[i])
        answer += Number(str[i])
    }
    return answer;
}