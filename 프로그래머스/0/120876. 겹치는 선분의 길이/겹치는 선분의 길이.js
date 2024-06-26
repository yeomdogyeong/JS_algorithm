// function cycle(props){
//     let [a,b] = props;
//     let arr = []
//     for(let i =a; i<=b; i++){
//         arr.push(i)
//     }
//     return arr;
// }
// //min, max를 잡는다
// function solution(lines) {
//     const resultArray = []
//     for(let i = 0; i<lines.length; i++){
//         resultArray.push(cycle(lines[i]))
//     }

//     console.log(resultArray);
// }

function solution(lines){
    let min = Infinity; // 초기값을 충분히 큰 값으로 설정
    let max = -Infinity; // 초기값을 충분히 작은 값으로 설정
    let result =0;
    for(let i = 0; i<lines.length; i++){  
        let [a,b] = lines[i]
        if(a < min){
            min = a
        }
        if(b > max){
            max = b
        }
    }
    for(let i=min; i<=max; i++){
        let adding =0;
        for(let j=0; j<3; j++){
        let [a,b] = lines[j]
       
          if(a <= i && i < b){
                adding++;
            }
        }
        if(adding >=2){
        result++
}
    }
    return result;
}