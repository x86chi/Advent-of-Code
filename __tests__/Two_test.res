open Jest
open Expect

test("sample case", () => {
  let input = `1-3 a: abcde
1-3 b: cdefg
2-9 c: ccccccccc`
  expect(Two.one(input)) |> toBe(2)
})

test("Part one", () => {
  let input = Fs.readFile("two.txt")
  expect(Two.one(input)) |> toBe(638)
})

test("Part two", () => {
  let input = Fs.readFile("two.txt")
  expect(Two.two(input)) |> toBe(699)
})
