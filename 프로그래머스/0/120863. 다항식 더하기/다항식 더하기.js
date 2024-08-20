function solution(polynomial) {
   const splitPoly = polynomial.split(' + ');
    let xArr = [];
    let numberArr = [];

    splitPoly.forEach(el => el.includes('x') ? xArr.push(el) : numberArr.push(el));

    let Xanswer = xArr.reduce((acc, curr) => {
        let coefficient = curr.replace('x', '');
        return acc + (coefficient === '' ? 1 : Number(coefficient));
    }, 0);

    let Yanswer = numberArr.reduce((acc, curr) => acc + Number(curr), 0);

    let result = [];

    if (Xanswer !== 0) {
        result.push(Xanswer === 1 ? 'x' : `${Xanswer}x`);
    }
    if (Yanswer !== 0) {
        result.push(Yanswer.toString());
    }

    return result.join(' + ') || '0';
}