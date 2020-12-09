open Jest

open Expect

test("sample case", () => {
  let input = `1721
979
366
299
675
1456`
  expect(One.main(input)) |> toBe(514579)
})

test("find answer", () => {
  let input = Fs.readFile("one.txt")
  expect(One.main(input)) |> toBe(252724)
})
