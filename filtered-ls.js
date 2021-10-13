const fs = require('fs')

const dir = process.argv[2]
console.log(dir)
console.log(process.argv[3])

fs.readdir(dir, (err, files) => {
    if (err)
        console.log(err);
    else {

        files.filter(file => {
            (file.includes('.md')) && console.log(file)
        })

    }
})



// const fs = require('fs')
// const path = require('path')

// const folder = process.argv[2]
// const ext = '.' + process.argv[3]

// fs.readdir(folder, function (err, files) {
//   if (err) return console.error(err)
//   files.forEach(function (file) {
//     if (path.extname(file) === ext) {
//       console.log(file)
//     }
//   })
// })
