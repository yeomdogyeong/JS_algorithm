function solution(myStr) {
    let main = ['a', 'b', 'c'];
    let result = [];
    let tempStr = '';

    for (let i = 0; i < myStr.length; i++) {
        if (main.includes(myStr[i])) {
            if (tempStr.length > 0) {
                result.push(tempStr);
                tempStr = '';
            }
        } else {
            tempStr += myStr[i];
        }
    }
    
    // 마지막 부분 문자열 추가
    if (tempStr.length > 0) {
        result.push(tempStr);
    }
    
    // 결과가 비어있다면 ["EMPTY"] 반환
    if (result.length === 0) {
        return ["EMPTY"];
    }

    return result;
}
