const fs = require('fs')

const file = process.argv[2]
const buf = fs.readFileSync(file)
const mystr = buf.toString()
console.log(mystr.split('\n').length - 1)