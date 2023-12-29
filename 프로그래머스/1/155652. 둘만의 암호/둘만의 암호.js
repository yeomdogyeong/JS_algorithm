function solution(s, skip, index) {
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", 
                      "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", 
                      "u", "v", "w", "x", "y", "z"].filter(el => !skip.includes(el));
    console.log(alphabet)
    let sp = s.split('')
    let mapping = sp.map(el => alphabet[(alphabet.indexOf(el) + index) % alphabet.length])
    
    return mapping.join('')
}