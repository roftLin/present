
import index from '../index'

describe('index', () => {
  it('should equal', () => {
    expect(index({ a: null, c: { b: 1, d: undefined } })).toEqual({ c: { b: 1 } });
  })
})


