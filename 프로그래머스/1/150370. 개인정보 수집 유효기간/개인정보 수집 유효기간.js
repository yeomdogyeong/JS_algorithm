function solution(today, terms, privacies) {

let termsArray = []
    for(let i=0; i<terms.length; i++){
        let termsType = terms[i].split(' ')
        termsArray.push([termsType[0], parseInt(termsType[1])]); // 숫자로 변환
    }
     console.log(termsArray)
let privaciesArray = []
let privacyDate = []
        for(let i=0; i<privacies.length; i++){
        let privacyType = privacies[i].split(' ')
         privacyDate.push(privacyType[0].split('.').map(Number)); // 날짜를 숫자 배열로 변환
        privaciesArray.push(privacyType)
    }
     console.log(privaciesArray)
    console.log(privacyDate)
let middleResult = []
    for(let i =0; i<privaciesArray.length; i++){
        for(let j =0; j<termsArray.length; j++){
            if(privaciesArray[i][1] === termsArray[j][0]){
                middleResult.push(termsArray[j][1]); // 숫자로 저장된 개월 수를 추가
            }
        }
    }
    console.log(middleResult)
    
    //합친 날짜
    for(let i =0; i<privacyDate.length; i++){
        // if(privacyDate[i][1] + middleResult[i] > 12){
        //     //크다면 
        //     privacyDate[i][0] = privacyDate[i][0] + 1
        //     privacyDate[i][1] = privacyDate[i][1] + middleResult[i] - 12
        // }else{
        //     //12랑 같거나 작다면
        //     privacyDate[i][1] = privacyDate[i][1] + middleResult[i]
        // }
        privacyDate[i][1] += middleResult[i];
        if (privacyDate[i][1] > 12) {
            privacyDate[i][0] += Math.floor((privacyDate[i][1] - 1) / 12);
            privacyDate[i][1] = (privacyDate[i][1] - 1) % 12 + 1;
        }
    }
    let todayArray = today.split('.').map(Number);
    let result = []
     for(let i =0; i< privacyDate.length; i++){
    //     if(todayArray[i] <= privacyDate[i]){
    //        continue;
    //     }else if(todayArray[2] === privacyDate[2]){
    //         result.push(i+1)
    //     }else{
    //         result.push(i+1)
    //     }
        if (
            todayArray[0] > privacyDate[i][0] ||
            (todayArray[0] === privacyDate[i][0] && todayArray[1] > privacyDate[i][1]) ||
            (todayArray[0] === privacyDate[i][0] && todayArray[1] === privacyDate[i][1] && todayArray[2] >= privacyDate[i][2])
        ) {
            result.push(i + 1);
        }
    }
    return result;
}