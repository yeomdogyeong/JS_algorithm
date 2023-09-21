function solution(num_list) {
const last = num_list[num_list.length - 1]
const lastwo = num_list[num_list.length - 2]
if(last > lastwo) {
    num_list.push(last - lastwo)
}
    else {
        num_list.push(last * 2)
    }
    return num_list
}