function solution(k, tangerine) {
//     const common = new Set(tangerine)
//     const arr = Array.from(common)
//     const map = new Map(arr.map(key => [key,0]))    

//     tangerine.forEach(el => {
//         //해쉬가 해당 원소를 키로 가지고있을때
//         if(map.has(el)){
//         //해당 키의 value를 가져와서 + 1
//             map.set(el, map.get(el)+1)
//         }
//     })
 const map = new Map();

    // 귤 크기별로 개수를 카운트
    tangerine.forEach(el => {
        map.set(el, (map.get(el) || 0) + 1);
    });

    // 크기별 개수를 내림차순으로 정렬
    const sortedCounts = Array.from(map.values()).sort((a, b) => b - a);
    console.log(sortedCounts)
     let count = 0;  // 선택한 귤의 개수
    let kind = 0;   // 선택한 귤 종류의 수
    for (let value of sortedCounts) {
        count += value;  // 귤 개수 추가
        kind++;          // 종류 추가
        if (count >= k) break; // 필요한 만큼 채우면 종료
    }

    return kind;  // 최소 종류 수 반환
}