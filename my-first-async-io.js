const fs = require('fs')

const file = process.argv[2]
fs.readFile(file, (err, data) => {
    err ? console.log(err) : console.log(data.toString().split('\n').length - 1)
})
