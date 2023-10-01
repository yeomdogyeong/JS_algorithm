function solution(nums) {
    //배열에서 같은거면 제외하고 넣는다. 즉, 다른 원소만 모아놓는 배열을 만들것
    let answer = []
    for(let i = 0; i<nums.length; i++){
       if(!answer.includes(nums[i]))answer.push(nums[i])
    }
   if((nums.length/2) >= answer.length)return answer.length
    else if((nums.length/2) < answer.length){
        return (nums.length/2)
    }
}