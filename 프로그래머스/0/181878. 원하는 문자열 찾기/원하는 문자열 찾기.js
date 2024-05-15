function solution(myString, pat) {
    const lower1 = myString.toLowerCase()
    const lower2 = pat.toLowerCase()

    if(lower1.includes(lower2)) return 1
    else return 0
}