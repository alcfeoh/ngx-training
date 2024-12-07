import { CurrencyRendererPipe } from './currency-renderer.pipe';

describe('CurrencyRendererPipe', () => {

  it('create an instance', () => {
    const pipe = new CurrencyRendererPipe();
    expect(pipe).toBeTruthy();
  });

  it('formats USD prices properly', () => {
    const pipe = new CurrencyRendererPipe();
    expect(pipe.transform(8.55)).toBe("$8.55");
    expect(pipe.transform(10.00)).toBe("$10");
  });

  it('formats EUR prices properly and use the given exchange rate', () => {
    const pipe = new CurrencyRendererPipe();
    expect(pipe.transform(8.55, "EUR")).toBe("€8.55");
    expect(pipe.transform(10.00, "EUR", 2)).toBe("€5");
  });

  it('formats GBP prices properly and use the given exchange rate', () => {
    const pipe = new CurrencyRendererPipe();
    expect(pipe.transform(8.55, "GBP")).toBe("£8.55");
    expect(pipe.transform(10.20, "GBP", 2)).toBe("£5.1");
  });

});
