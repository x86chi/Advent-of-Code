type passport = array<string>

let validator = passport => {
  let length = passport->Belt_Array.length

  let isFull = length === 8

  if isFull {
    true
  } else if length === 7 {
    passport->Belt_Array.some(field => field === "cid")
  } else {
    false
  }
}

exception UnexpectedFlow

let parse = input => {
  let rawPassports = input->Js.String2.split("\n\n")

  let spliter = rawPassport => {
    let rawFields = rawPassport->Js.String2.splitByRe(%re("/\s/"))
    rawFields->Belt_Array.map(rawField =>
      switch rawField {
      | None => raise(UnexpectedFlow)
      | Some(raw) => (raw->Js.String2.split(":"))[0]
      }
    )
  }

  rawPassports->Belt_Array.map(spliter)
}

let main = input =>
  input->parse->Belt_Array.map(validator)->Belt_Array.keep(boolean => boolean)->Belt_Array.length
