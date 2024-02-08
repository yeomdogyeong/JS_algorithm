function solution(price) {
    let floor;
    if (100000 <= price && price < 300000) {
        floor = price * 0.95;
    } else if (300000 <= price && price < 500000) {
        floor = price * 0.9;
    } else if (price >= 500000) {
        floor = price * 0.8
    }else {
        floor = price;
    }
return Math.floor(floor)
}