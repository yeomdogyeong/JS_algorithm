function solution(phone_number) {
    let extraNumber = phone_number.split('').slice(0,-4).join('')
    let realNumber = phone_number.split('').slice(-4).join('')
    let answer = ''
  for(let i = 0; i<extraNumber.length; i++){
      answer += '*'
  }
      answer += realNumber
      return answer;
}