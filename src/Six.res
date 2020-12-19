open Extended

let parse = input =>
  input->Js.String2.split("\n\n")->Belt_Array.map(String.split_new_line)->Array.to_list

module One = {
  let reducer = group =>
    group
    |> List.map(String.split_chars)
    |> List.flatten
    |> List.sort_uniq(Char.compare)
    |> List.length

  let part1 = input => {
    input->parse->Belt_List.map(reducer)->Belt_List.reduce(0, Int.add)
  }
}
