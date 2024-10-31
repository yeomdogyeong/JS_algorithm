function solution(dots) {
  var answer = 0;
const [d0, d1, d2, d3] = dots;
  function calculation(a, b, c, d) {
    let abDiff, cdDiff;

    abDiff = (b[1] - a[1]) / (b[0] - a[0]);
    cdDiff = (d[1] - c[1]) / (d[0] - c[0]);
 
    if (abDiff === cdDiff) {
      answer += 1;
    }
  }

  // 1-2, 3-4가 이어졌을 때
  calculation(d0, d1, d2, d3);

  // 1-3, 2-4가 이어졌을 때
  calculation(d0, d2, d1, d3);

  // 1-4, 2-3가 이어졌을 때
  calculation(d0, d3, d1, d2);

  return answer > 0 ? 1 : 0;
}