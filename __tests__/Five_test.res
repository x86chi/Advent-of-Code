open Jest

open Expect

test("find id", () => {
  let ticket = "FBFBBFFRLR"
  expect(Five.seatFromTicket(ticket)) |> toBe(357)
})

describe("find answer", () => {
  let input = Fs.readFile("five.txt")
  test("part 1", () => {
    expect(Five.part1(input)) |> toBe(919)
  })
  test("part 2", () => {
    expect(Five.part2(input)) |> toBe(642)
  })
})
