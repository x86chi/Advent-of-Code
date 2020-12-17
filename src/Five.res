open Extended

let rec div = (l, min, max) => {
  if l->List.length > 0 {
    let head = l->List.hd
    let tail = l->List.tl
    let half = (max - min) / 2 + min
    switch head {
    | #upper => tail->div(min, half)
    | #lower => tail->div(half + 1, max)
    }
  } else {
    min
  }
}

let divOn = (source, from, len, max, mapCh) => {
  String.sub(source, from, len)->String.split_chars->Belt_List.map(mapCh)->div(0, max)
}

let seatFromTicket = ticket => {
  let rowFun = x =>
    switch x {
    | 'F' => #upper
    | 'B' => #lower
    | _ => failwith("invalid input")
    }
  let colFun = x =>
    switch x {
    | 'L' => #upper
    | 'R' => #lower
    | _ => failwith("invalid input")
    }

  let row = divOn(ticket, 0, 7, 127, rowFun)
  let col = divOn(ticket, 7, 3, 7, colFun)

  row * 8 + col
}

let main = input => {
  input->Parse.readlines->Belt_List.map(seatFromTicket)->Belt_List.sort(compare)
}
let part1 = input => {
  input->main->List.rev->List.hd
}

let part2 = input => {
  let seats = input->main->List.tl
  seats->Belt_List.reduce(seats->List.hd, (prev, seat) => prev + 1 === seat ? seat : prev) + 1
}
