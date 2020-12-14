const currentYear = 2020

function find(pieces: number[], goal = currentYear) {
  const answer: number[] = [0, 0]
  for (const piece of pieces) {
    const last = goal - piece

    if (pieces.includes(last)) {
      answer[0] = piece
      answer[1] = last
      break
    }
  }

  return answer.reduce((a, b) => a * b)
}

function explore(pieces: number[]) {
  for (const [_index, piece] of Object.entries(pieces)) {
    const goal = currentYear - piece

    const index = Number(_index)
    const cloned = [...pieces.slice(0, index), ...pieces.slice(index)]

    const answer = find(cloned, goal)

    if (answer > 0) return piece * answer
  }
}

const parser = (input: string) => input.split('\n').map(Number)

export const part1 = (input: string) => find(parser(input))
export const part2 = (input: string) => explore(parser(input))
