type Range = readonly [number, number]

type Row = 'F' | 'B'
type Column = 'L' | 'R'
type Direction = Row | Column

export function indexing(range: Range, direction: Direction): Range {
  const [start, end] = range
  const half = (end - start - 1) / 2

  const isFirst = direction === 'F' || direction === 'L'

  const forward = [start, start + half] as const
  const backward = [start + half + 1, end] as const

  return isFirst ? forward : backward
}

export const row = (address: Row[]) => explore(address, [0, 127])
export const column = (address: Column[]) => explore(address, [0, 7])

function explore(address: Direction[], range: Range): number {
  const [start] = address.reduce(indexing, range)
  return start
}

export function findSeatID(raw: string) {
  const address = raw.split('')
  const rowAddress = address.slice(0, 7) as Row[]
  const columnAddress = address.slice(7) as Column[]

  const seat = {
    row: row(rowAddress),
    column: column(columnAddress),
  } as const

  return seat.row * 8 + seat.column
}
