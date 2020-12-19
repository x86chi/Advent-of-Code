module String = {
  include String
  let split_new_line = s => s->Js.String2.split("\n") |> Array.to_list
  let split_chars = s => List.init(s->String.length, s->String.get)
}

module Int = {
  let add = (a, b) => a + b
}
