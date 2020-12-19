open Jest
open Expect

open Six

let readInput = Fs.readFile("six.txt")
let sample = `abc

a
b
c

ab
ac

a
a
a
a

b`

describe("part 1", () => {
  open One
  test("reduce questions", () => {
    let input = list{"abcx", "abcy", "abcz"}
    expect(reducer(input)) |> toEqual(6)
  })

  test("sample case", () => {
    let input = sample
    expect(part1(input)) |> toBe(11)
  })

  test("find answer", () => {
    let input = readInput
    expect(part1(input)) |> toBe(6782)
  })
})
