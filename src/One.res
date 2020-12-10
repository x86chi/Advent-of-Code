let current_year = 2020

let find = pieces => {
  open Belt
  let first = pieces->List.reduce(0, (previous, first) => {
    let last = current_year - first

    let has = if previous === last {
      false
    } else {
      pieces->List.has(last, (a, b) => a === b)
    }

    if has {
      min(first, last)
    } else {
      previous
    }
  })

  first * (current_year - first)
}
let parse = input => Parse.readlines(input) |> List.map(int_of_string)

let main = input => input->parse->find
