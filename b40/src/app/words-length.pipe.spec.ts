import { WordsLengthPipe } from './words-length.pipe';

describe('WordsLengthPipe', () => {
  it('create an instance', () => {
    const pipe = new WordsLengthPipe();
    expect(pipe).toBeTruthy();
  });
});
