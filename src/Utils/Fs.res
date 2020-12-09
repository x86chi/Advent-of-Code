type option = {encoding: string}

@bs.module("fs") external readFileSync: (string, option) => string = "readFileSync"
let readFile = path => readFileSync(`__tests__/${path}`, {encoding: "utf8"})
