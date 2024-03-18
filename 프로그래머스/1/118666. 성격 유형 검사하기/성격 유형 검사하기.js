function solution(survey, choices) {
    const obj = new Map()
    const personality = ['RT','CF','JM','AN']
    
    personality.join('').split('').forEach((type) => {
    obj.set(type, 0);
});
    //4이상이면 2번째꺼, foreach?
   survey.forEach((item) => {
        obj.set(item[0], 0);
        obj.set(item[1], 0);
    });

    choices.forEach((el, index) => {
        if (el > 4) {
            obj.set(survey[index][1], obj.get(survey[index][1]) + el - 4);
        } else if (el < 4) {
            obj.set(survey[index][0], obj.get(survey[index][0]) + 4 - el);
        }
    });

    let answer = ''
    personality.forEach((types) => {
    if (obj.get(types[0]) >= obj.get(types[1])) {
        answer += types[0];
    } else {
        answer += types[1];
    }
});
   return answer;
}