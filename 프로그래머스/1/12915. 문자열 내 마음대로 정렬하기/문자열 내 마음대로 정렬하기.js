function solution(strings, n) {
   return strings.sort((a,b)=> {
        //el > el2 
        //return 1을 반환하면 b가 a앞으로
       if(a[n] > b[n])return 1; //'u'>'e'면 참이므로 'eu'
      else if(a[n] < b[n])return -1;
       else return a>b?1:-1
   })
}