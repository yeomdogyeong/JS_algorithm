function solution(my_string, queries) {
   
    let arr = my_string.split('');

  
    queries.forEach(query => {
        const [start, end] = query;

       
        for (let i = start, j = end; i < j; i++, j--) {
           
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    });

    
    return arr.join('')

}