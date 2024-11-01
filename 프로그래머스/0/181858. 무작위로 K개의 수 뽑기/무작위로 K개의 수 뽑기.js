function solution(arr, k) {
  //1.arr에서 몇 개의 숫자가 나올지 구한다.(중복된 숫자 배제한 배열 생성)
//2. 몇 개의 숫자가 나오는지 구하고 k와 비교해서 k가 더 크면, 남은 길이는 -1를 붙인다.
    let realArr = []
    for(let i= 0 ; i< arr.length; i++){
       if(!realArr.includes(arr[i])) {
        realArr.push(arr[i]);
     }
    }
     if(realArr.length >= k){
        return realArr.slice(0,k)
    }else if(realArr.length < k){
      const extra = k - realArr.length;
        for(let i = 0; i < extra; i++) {
            realArr.push(-1);
        }
        return realArr;
    }
}