const target = 'shiny gold'

interface Bag {
  name: string
  count: number
}

export function part1(bags: string[]) {
  const mapped = reducer(bags)

  return Object.keys(mapped).filter(dfs).length - 1

  function dfs(name: string): boolean {
    if (name === target) return true

    const contents = mapped[name]
    if (contents === false) return false

    for (const { name } of contents) {
      if (dfs(name)) return true
    }
    return false
  }
}

export function part2(bags: string[]) {
  const mapped = reducer(bags)

  return dfs(target)

  function dfs(bag: string): number {
    const contents = mapped[bag]
    if (contents === false) return 0

    return contents.reduce(
      (acc, { name, count }) => acc + count + count * dfs(name),
      0
    )
  }
}

function reducer(bags: string[]) {
  return bags.reduce((map, bag) => {
    const { name, contents } = parse(bag)
    map[name] = contents
    return map
  }, {} as Record<string, false | Bag[]>)
}

interface Parsed {
  name: string
  contents: Bag[] | false
}

export function parse(input: string): Parsed {
  const [rawName, rawContents] = input.split(/ bags contain /)

  const [name, contents] =
    rawContents !== 'no other bags.'
      ? [
          rawName,
          rawContents.split(', ').map((bag) => {
            const matched = bag.match(/\d/)

            if (!matched) throw Error('cannot found number of bags')

            return {
              count: Number(matched[0]),
              name: bag.replace(/( bags?\.?)/, '').replace(/\d /, ''),
            }
          }),
        ]
      : ([rawName.replace(' bags contain no other bags.', ''), false] as const)

  return { name, contents }
}
