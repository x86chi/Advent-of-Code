type Answers = Record<string, number>

export function reducer(forms: string[]) {
  const reduced = forms.reduce((prev, form) => {
    for (const question of form.split('')) {
      prev[question] = prev[question] ? prev[question] + 1 : 1
    }
    return prev
  }, {} as Answers)
  const count = forms.length
  return { reduced, count }
}
const mapper = (input: string[][]) => input.map(reducer)

export const part1 = (input: string[][]) =>
  mapper(input).reduce(
    (acc, { reduced }) => acc + Object.keys(reduced).length,
    0
  )

export const part2 = (input: string[][]) =>
  mapper(input).reduce((acc, { reduced, count }) => {
    const { length } = Object.values(reduced).filter((value) => value === count)
    return acc + length
  }, 0)
