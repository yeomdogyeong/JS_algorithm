function solution(id_list, report, k) {
    var answer = [];
    const person = {};
    const obj = {};
    for(let i = 0 ; i < report.length; i++){
        const [a, b] = report[i].split(' ');
        if(obj.hasOwnProperty(b)){
            obj[b][a] = true;
        } else {
            obj[b] = {};
            obj[b][a] = true;
        }
        
    }
 
    for(let i = 0 ; i < id_list.length; i++){
        person[id_list[i]] = 0;
    }
       

    for(let i = 0 ; i < id_list.length; i++){
        if(obj[id_list[i]]){
            const keys = Object.keys(obj[id_list[i]]);
            if(keys.length >= k) {
                keys.forEach((key) => {
                    person[key]++;             
                })
            }
        }
    }
    
     for(let i = 0 ; i < id_list.length; i++){
        answer.push(person[id_list[i]]);
    }
        
    return answer;
}