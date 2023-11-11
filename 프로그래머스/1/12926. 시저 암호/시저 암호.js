function solution(s, n) {
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lower = "abcdefghijklmnopqrstuvwxyz";

    let answer = ''
    
    for(let i = 0; i < s.length; i++){
        //공백인 경우 넣고 계속하기
        let el = s[i]
        if(el === ' '){
            answer += s[i]
            continue;
        }
        //대문자인지 소문자인지 삼항연산자로 결과값 도출
        let text = upper.includes(el) ? upper : lower
        //index순서에 n을 더함
        let index = text.indexOf(el) + n;
        //index가 upper/lower길이를 넘을 경우, 전체 길이를 다시 빼서 처음값으로 돌아가게함
        if(index >= text.length) {
            index -= text.length;
        }
        
        answer += text[index]
    }
    return answer;
}