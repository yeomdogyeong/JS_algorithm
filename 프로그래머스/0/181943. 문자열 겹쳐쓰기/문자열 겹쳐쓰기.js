function solution(my_string, overwrite_string, s) {
    let letter = ''
for(let i=0; i<s; i++){
    letter += my_string[i]
}
    for(let j =0; j <overwrite_string.length; j++){
        letter += overwrite_string[j]
    }
if(my_string.length > overwrite_string.length + s) {
     for (let k = overwrite_string.length + s; k < my_string.length; k++) {
            letter += my_string[k];
        } 
}
    return letter
}