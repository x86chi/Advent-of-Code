type format = {range: (int, int), letter: string, password: string}

let counter = (string, target) => {
  let count = ref(0)
  for index in 0 to (string |> String.length) - 1 {
    if Js.String.get(string, index) === target {
      count := count.contents + 1
    }
  }
  count.contents
}

type part = One | Two

let calculate = (part, input) => input |> List.filter(data => {
    let {range, letter, password} = data

    let (minimum, maximum) = range
    if part === One {
      let length = counter(password, letter)
      minimum <= length && length <= maximum
    } else {
      let first = Js.String.get(password, minimum - 1) === letter
      let second = Js.String.get(password, maximum - 1) === letter

      first !== second
    }
  })

let parse = input => Parse.readlines(input) |> List.map(data => {
    let splited = data |> Js.String.split(" ")

    let ranges = splited[0] |> Js.String.split("-")
    let range = (ranges[0] |> int_of_string, ranges[1] |> int_of_string)

    let letter = splited[1]->Js.String.get(0)
    let password = splited[2]

    {range: range, letter: letter, password: password}
  })

let one = input => input->parse |> calculate(One) |> List.length
let two = input => input->parse |> calculate(Two) |> List.length
