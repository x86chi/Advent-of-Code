import { readFileSync } from 'fs'
import { join } from 'path'

import { part1, parse, part2 } from './Seven'

const sample = [
  'light red bags contain 1 bright white bag, 2 muted yellow bags.',
  'dark orange bags contain 3 bright white bags, 4 muted yellow bags.',
  'bright white bags contain 1 shiny gold bag.',
  'muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.',
  'shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.',
  'dark olive bags contain 3 faded blue bags, 4 dotted black bags.',
  'vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.',
  'faded blue bags contain no other bags.',
  'dotted black bags contain no other bags.',
]

const readInput = readFileSync(join('__tests__', 'seven.txt'), {
  encoding: 'utf8',
}).split('\n')

test('parse', () => {
  expect(
    parse(
      'wavy lime bags contain 3 dim violet bags, 5 posh violet bags, 1 light white bag, 2 posh olive bags.'
    )
  ).toEqual({
    name: 'wavy lime',
    contents: [
      { count: 3, name: 'dim violet' },
      { count: 5, name: 'posh violet' },
      { count: 1, name: 'light white' },
      { count: 2, name: 'posh olive' },
    ],
  })
})

describe('part 1', () => {
  it('sample case', () => {
    expect(part1(sample)).toBe(4)
  })

  it('find answer', () => {
    expect(part1(readInput)).toBe(378)
  })
})

describe('part 2', () => {
  it('sample case', () => {
    expect(part2(sample)).toBe(32)
  })

  it('another case', () => {
    const input = [
      'shiny gold bags contain 2 dark red bags.',
      'dark red bags contain 2 dark orange bags.',
      'dark orange bags contain 2 dark yellow bags.',
      'dark yellow bags contain 2 dark green bags.',
      'dark green bags contain 2 dark blue bags.',
      'dark blue bags contain 2 dark violet bags.',
      'dark violet bags contain no other bags.',
    ]
    expect(part2(input)).toBe(126)
  })
  it('find answer', () => {
    expect(part2(readInput)).toBe(27526)
  })
})
