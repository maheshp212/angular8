import { PostcurrencyPipe } from './postcurrency.pipe';

describe('PostcurrencyPipe', () => {
  it('create an instance', () => {
    const pipe = new PostcurrencyPipe();
    expect(pipe).toBeTruthy();
  });
});
