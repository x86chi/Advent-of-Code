import { column, indexing, findSeatID, row } from './Five'

import { readFileSync } from 'fs'
import { join } from 'path'

describe('range indexing', () => {
  it('Front', () => {
    expect(indexing([0, 127], 'F')).toEqual([0, 63])
  })
  it('Back', () => {
    expect(indexing([0, 127], 'B')).toEqual([64, 127])
  })
})

describe('modules', () => {
  it('row', () => {
    expect(row(['F', 'B', 'F', 'B', 'B', 'F', 'F'])).toBe(44)
  })
  it('column', () => {
    expect(column(['R', 'L', 'R'])).toBe(5)
  })
})

describe('answers', () => {
  const input = readFileSync(join('__tests__', 'five.txt'), {
    encoding: 'utf8',
  }).split('\n')

  it('sample case', () => {
    expect(findSeatID('FBFBBFFRLR')).toBe(357)
  })

  it('part 1', () => {
    const answer = input.reduce((maximum, address) => {
      return Math.max(maximum, findSeatID(address))
    }, 0)
    expect(answer).toBe(919)
  })

  it('part 2', () => {
    const mapped = input.map(findSeatID).sort().slice(1)

    const answer =
      mapped.reduce((prev, seat) => (prev + 1 === seat ? seat : prev)) + 1

    expect(answer).toBe(642)
  })
})
