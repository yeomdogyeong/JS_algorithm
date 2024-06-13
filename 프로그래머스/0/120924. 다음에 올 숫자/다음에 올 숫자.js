function solution(common) {
    let some = 0
         
        let minus = common[1] - common[0]
        let nanu = common[1] / common[0]
        if(common[2] - common[1] === minus){
            return common[common.length-1] + minus
        }else if(common[2] % common[1] === 0){
            return common[common.length-1] * nanu;
        }

}