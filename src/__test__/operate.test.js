import operate from '../logic/operate';

describe('Quick Operation', () => {
  it('Should retun Two ', () => {
    const plusOperate = operate(1, 1, '+');
    expect(Number(plusOperate)).toBe(2);
  });
  it('Should retun Four ', () => {
    const minusOperate = operate(5, 1, '-');
    expect(Number(minusOperate)).toBe(4);
  });
  it('Should retun Ten ', () => {
    const multiplyOperate = operate(5, 2, 'x');
    expect(Number(multiplyOperate)).toBe(10);
  });
  it('Should retun Twenty ', () => {
    const divideOperate = operate(40, 2, '÷');
    expect(Number(divideOperate)).toBe(20);
  });
});
