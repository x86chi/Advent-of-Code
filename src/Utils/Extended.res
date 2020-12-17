module String = {
  include String
  let split_chars = s => List.init(s->String.length, s->String.get)
}
