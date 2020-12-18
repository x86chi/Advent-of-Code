import { readFileSync } from 'fs'
import { join } from 'path'

import { reducer, part1, part2 } from './Six'

it('reducing', () => {
  const input = ['abcx', 'abcy', 'abcz']
  expect(reducer(input).reduced).toEqual({ a: 3, b: 3, c: 3, x: 1, y: 1, z: 1 })
})

describe('answers', () => {
  const input = readFileSync(join('__tests__', 'six.txt'), {
    encoding: 'utf8',
  })
    .split('\n\n')
    .map((a) => a.split('\n'))

  it('part 1', () => {
    expect(part1(input)).toBe(6782)
  })
  it('part 2', () => {
    expect(part2(input)).toBe(3596)
  })
})
