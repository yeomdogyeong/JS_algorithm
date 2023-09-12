function solution(n) {
    let su = "수"
    let bak = "박"
    let answer = ''
for(let i =0; i<n; i++)
    if(i % 2 === 0){
    answer += su
    }else if(i % 2 === 1){
    answer += bak
    }
return answer;
}