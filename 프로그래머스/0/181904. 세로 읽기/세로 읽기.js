
function solution(my_string, m, c) {
    let answer = '';
    let len = my_string.length;
    let num_rows = Math.ceil(len / m);

    for (let i = 0; i < num_rows; i++) {
        let index = i * m + (c - 1);
        if (index < len) {
            answer += my_string[index];
        }
    }

    return answer;
}