function solution(left, right) {
    let result = 0;
    
    for (let i = left; i <= right; i++) {
        let divisorCount = 0;

        for (let j = 1; j <= i; j++) {
            if (i % j === 0) {
                divisorCount++;
            }
        }

        if (divisorCount % 2 === 0) {
            result += i;
        } else {
            result -= i;
        }
    }
    
    return result;
}