function solution(answers) {
   //12345,21232425,3311224455
    const arr0 = [1, 2, 3, 4, 5];
    const arr1 = [2, 1, 2, 3, 2, 4, 2, 5];
    const arr2 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
  
    const counts = [0, 0, 0]; 
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === arr0[i % arr0.length]) counts[0]++;
        if (answers[i] === arr1[i % arr1.length]) counts[1]++;
        if (answers[i] === arr2[i % arr2.length]) counts[2]++;
    }

  
    const max = Math.max(...counts);
    const result = [];
    for (let i = 0; i < counts.length; i++) {
        if (counts[i] === max) result.push(i + 1); 
    }
    
    return result;
}