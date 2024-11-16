function solution(N, stages) {
    let all = stages.length
    let hash = {}
    for(let stage of stages){
        //n보다 크다면 키와쌍을 만들지 않음
        if(stage > N){
            continue;
        }
        //if문으로 초기값 설정
        if(!hash[stage]){
            hash[stage] = 0
        }
        hash[stage]++;
    }
    console.log(hash)
    
    let nanugi = []
    let successNumber = stages.length
    for(let i = 1; i<=N; i++){
        //hash의 키가 있다면 계산하고, 없다면 0으로 설정할것
        // 밑에다 두면 해당 변수가 계속 stages.length로 초기화
        // let successNumber = stages.length
        if(hash.hasOwnProperty(i)){
            nanugi.push(hash[i] / successNumber)
            successNumber -= hash[i]
            console.log('success', successNumber)
        }else{
            nanugi.push(0)
        }
    }
    let sortIndex = []
    let indexNanugi = nanugi.map((value,index)=> ({value,index}))
    console.log(indexNanugi)
    indexNanugi.sort((a,b)=> b.value-a.value)
    for(let answer of indexNanugi){
        sortIndex.push(answer.index+1)
    }
    return sortIndex
}