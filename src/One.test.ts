import { readFileSync } from 'fs'
import { join } from 'path'

import { part1, part2 } from './One'

const readInput = readFileSync(join('__tests__', 'one.txt'), {
  encoding: 'utf8',
})

const sample = `1721
979
366
299
675
1456`

describe('part 1', () => {
  const input = sample
  it('sample case', () => {
    expect(part1(input)).toBe(514579)
  })
  it('find answer', () => {
    const input = readInput
    expect(part1(input)).toBe(252724)
  })
})

describe('part 2', () => {
  it('sample case', () => {
    const input = sample
    expect(part2(input)).toBe(241861950)
  })
  it('find answer', () => {
    const input = readInput
    expect(part2(input)).toBe(276912720)
  })
})
