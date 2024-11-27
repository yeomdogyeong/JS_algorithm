function solution(my_string) {
    let arrayEle = my_string.split(' '); 
    let answer = Number(arrayEle[0]); 

    for (let i = 1; i < arrayEle.length; i += 2) {
        let operator = arrayEle[i]; 
        let operand = Number(arrayEle[i + 1]); 

        if (operator === '+') {
            answer += operand;
        } else if (operator === '-') {
            answer -= operand;
        }
    }

    return answer;
}
