function solution(today, terms, privacies) {

 let termsArray = {};
    for (let term of terms) {
        let [type, months] = term.split(' ');
        termsArray[type] = parseInt(months);
    }

    let todayArray = today.split('.').map(Number);
    let result = [];

    for (let i = 0; i < privacies.length; i++) {
        let [date, type] = privacies[i].split(' ');
        let [year, month, day] = date.split('.').map(Number);

        // 유효기간을 더해 만료일 계산
        month += termsArray[type];
        while (month > 12) {
            month -= 12;
            year += 1;
        }

        // 만료일과 오늘 날짜 비교
        if (year < todayArray[0] || 
            (year === todayArray[0] && month < todayArray[1]) || 
            (year === todayArray[0] && month === todayArray[1] && day <= todayArray[2])) {
            result.push(i + 1); // 인덱스는 1부터 시작하므로 i+1
        }
    }

    return result;
}