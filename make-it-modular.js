const mymodule = require('./mymodule.js')
const dir = process.argv[2]
const filterExt = process.argv[3]
mymodule(dir, filterExt, function (err, list) {
  if (err) {
    return console.error('There was an error:', err)
  }
  list.forEach(function (file) {
    console.log(file)
  })
})



