function solution (num) {
    let answer = 0;

//연속된 합이 num인지 판단하려고 할 때는
//num의 약수이자 홀수의 갯수를 찾으면 된다
  for(let i=1; i<=num; i++) {
    if (num%i == 0 && i%2 == 1)
      answer++
  }
    return answer;
}
