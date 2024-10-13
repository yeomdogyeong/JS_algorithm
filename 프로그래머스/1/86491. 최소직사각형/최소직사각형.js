function solution(sizes) {
 let sortedSizes = sizes.map(sublist => sublist.sort((a, b) => a - b));

    console.log(sortedSizes);
    
    let first = 0;
    let second = 0;
    
    for(let i = 0 ; i<sortedSizes.length; i++){
    if(sortedSizes[i][0] > first){
        first = sortedSizes[i][0] 
    }
    if(sortedSizes[i][1] > second){
        second = sortedSizes[i][1]
    }
    console.log(first,second)
}
    return first * second;
}