function solution(n, m, section) {
    let result = 0;
    let part = 0;
    
    section.forEach((item)=>{
            if(item > part){
        part = item + m - 1
        result++
    }})
    return result; 
}
    
                  
                 
